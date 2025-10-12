# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

# If you use native deps (sharp/canvas/sass/node-gyp), you need build tools:
RUN apk add --no-cache python3 make g++ libc6-compat

# Avoid git hooks & noisy CI differences in containers
ENV HUSKY=0
ENV CI=true

# Enable pnpm (from corepack) and pin a version if you want
RUN corepack enable
# optional: RUN corepack prepare pnpm@9.7.0 --activate

# Install deps from lockfile
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source and build
COPY . .

# Show what script will run, then run with verbose reporter to expose real error
# Also dump pnpm debug log on failure to help diagnose
RUN node -e "console.log('scripts:', require('./package.json').scripts)" \
 && (pnpm build --reporter=default || { echo '--- pnpm debug log ---'; cat /root/.pnpm-debug.log || true; exit 1; })

# ---- Runtime stage ----
FROM nginx:1.27-alpine

# SSL: we expose 80/443 in case you mount certs via compose (recommended)
EXPOSE 80 443

# Copy Nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy built app
COPY --from=build /app/dist /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --spider -q http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
