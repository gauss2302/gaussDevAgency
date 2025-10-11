FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies using the existing lockfile
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile

# Copy source and build the production bundle
COPY . .
RUN pnpm build

# Production image
FROM nginx:1.27-alpine

# Copy our custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
