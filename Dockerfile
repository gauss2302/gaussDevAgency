FROM nginx:1.27-alpine
EXPOSE 80 443
RUN rm -f /etc/nginx/conf.d/default.conf

# copy correct nginx config folder (new structure)
COPY nginx/conf.d/ /etc/nginx/conf.d/

# do NOT copy SSL — it's mounted via docker-compose
COPY --from=build /app/dist /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
