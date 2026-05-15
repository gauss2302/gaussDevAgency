# ────── Stage 1: Build the frontend (Vite/Vue, pnpm) ──────
FROM node:20-alpine AS build
WORKDIR /app

# Copy package files first so corepack can read the `packageManager`
# field from package.json (gives us a single source of truth for the
# pnpm version, shared with the local dev environment).
COPY package.json pnpm-lock.yaml ./

# Enable corepack and install the exact pnpm version pinned in
# package.json's `packageManager` field. NEVER use `pnpm@latest` here:
# recent pnpm 11.x releases depend on `node:sqlite` which only exists
# in Node 22.5+, so they crash on this `node:20-alpine` base image.
RUN corepack enable && corepack install
RUN pnpm install --frozen-lockfile

# Copy source and build
COPY . .
RUN pnpm run build
# → this creates /app/dist (or /app/build if you use Create-React-App)

# ────── Stage 2: Serve with nginx ──────
FROM nginx:1.27-alpine

EXPOSE 80 443
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy your custom nginx configs
COPY nginx/conf.d/ /etc/nginx/conf.d/

# Copy the built app from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Fix permissions
RUN chmod -R 755 /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]