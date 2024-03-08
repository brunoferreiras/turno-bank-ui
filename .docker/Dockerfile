# build
FROM node:20.11-alpine3.19 as build-stage
WORKDIR /app
RUN npm install -g vite
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

# production
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
