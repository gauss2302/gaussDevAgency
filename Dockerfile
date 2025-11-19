# ────── Stage 1: Build the frontend (Vite/React/Vue/whatever you use) ──────
FROM node:20-alpine AS build
WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build
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