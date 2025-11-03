# ---- Base dependencies ----
FROM node:20-alpine AS base
WORKDIR /app

# Установка системных зависимостей (для нативных модулей)
RUN apk add --no-cache python3 make g++ libc6-compat

# Отключаем Husky (не нужен в CI)
ENV HUSKY=0

# Включаем corepack и pnpm
RUN corepack enable

# Копируем только package-файлы для кэширования зависимостей
COPY package.json pnpm-lock.yaml ./

# Устанавливаем зависимости (строго по lockfile)
RUN pnpm install --frozen-lockfile

# Копируем весь код
COPY . .

# ---- Build stage ----
FROM base AS build
ENV CI=true

# Шаг 1: Проверка типов (без генерации кода)
RUN pnpm run type-check

# Шаг 2: Сборка Vite
RUN pnpm run build-only

# ---- Development stage ----
FROM base AS dev
ENV CI=false
EXPOSE 5173
CMD ["pnpm", "dev", "--host", "0.0.0.0", "--port", "5173"]

# ---- Runtime stage (nginx) ----
FROM nginx:1.27-alpine AS production

# Открываем порты
EXPOSE 80 443

# Копируем кастомный Nginx конфиг
COPY nginx/gaussdev.https.conf /etc/nginx/conf.d/gaussdev.conf
RUN rm -f /etc/nginx/conf.d/default.conf

# Копируем SSL-сертификаты
COPY nginx/ssl/ /etc/ssl/gaussdev/
RUN if [ -d /etc/ssl/gaussdev ]; then \
      find /etc/ssl/gaussdev -type f -name '*.key' -exec chmod 600 {} +; \
      find /etc/ssl/gaussdev -type f ! -name '*.key' -exec chmod 644 {} +; \
    fi

# Копируем собранные файлы из build-стейджа
COPY --from=build /app/dist /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html

# Запуск Nginx
CMD ["nginx", "-g", "daemon off;"]