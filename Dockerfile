# Stage 1: Build the React app
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY semtle.crt semtle.crt
COPY semtle.key semtle.key
COPY . ./
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
