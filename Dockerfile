FROM node:16-alpine as builder
RUN mkdir -p /app 
WORKDIR /app 
COPY package.json ./
RUN npm install 
COPY ./ ./
CMD npm run build 

from nginx:alpine 
COPY --from=builder /app/build /usr/share/nginx/html 