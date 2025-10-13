# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app
RUN apk add --no-cache python3 make g++ libc6-compat
ENV HUSKY=0 CI=true
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# ---- Runtime stage (nginx) ----
FROM nginx:1.27-alpine
EXPOSE 80 443

# Copy Nginx config
COPY gaussdev.conf /etc/nginx/conf.d/gaussdev.conf
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy built files
COPY --from=build /app/dist /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
