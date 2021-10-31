FROM nginx:1-alpine

# COPY default.conf /etc/nginx/conf.d/
# COPY nginx.conf /etc/nginx/nginx.conf

# COPY my-site.com.crt /etc/nginx/my-site.com.crt
# COPY my-site.com.key /etc/nginx/my-site.com.key

# COPY gme-android-client.dfeverx.in.crt /etc/nginx/gme-android-client.dfeverx.in.crt
# COPY gme-android-client.dfeverx.in.key /etc/nginx/gme-android-client.dfeverx.in.key

# COPY ./sites-available /etc/nginx/sites-available

COPY nginx.conf /etc/nginx/
# COPY docker-entrypoint.sh /
# RUN chmod +x /docker-entrypoint.sh
# ENV CLIENT_MAX_BODY_SIZE 20M
# EXPOSE 8080

# ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]