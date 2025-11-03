# ---- Base dependencies ----
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache python3 make g++ libc6-compat
ENV HUSKY=0
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .

# ---- Build stage ----
FROM base AS build
ENV CI=true
RUN pnpm approve-builds || true
RUN pnpm run type-check
RUN pnpm run build-only

# ---- Development stage ----
FROM base AS dev
ENV CI=false
EXPOSE 5173
CMD ["pnpm", "dev", "--host", "0.0.0.0", "--port", "5173"]

# ---- Runtime stage (nginx) ----
FROM nginx:1.27-alpine
EXPOSE 80 443
COPY nginx/gaussdev.https.conf /etc/nginx/conf.d/gaussdev.conf
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx/ssl/ /etc/ssl/gaussdev/
RUN if [ -d /etc/ssl/gaussdev ]; then \
      find /etc/ssl/gaussdev -type f -name '*.key' -exec chmod 600 {} +; \
      find /etc/ssl/gaussdev -type f ! -name '*.key' -exec chmod 644 {} +; \
    fi
COPY --from=build /app/dist /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]