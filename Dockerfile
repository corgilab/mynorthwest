FROM node:7.10 as build-deps 
WORKDIR /usr/src/app
COPY package.json package-lock.json webpack.config.js ./
COPY . ./
RUN npm install
RUN npm run build

FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
