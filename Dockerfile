FROM node:9.6.1-alpine

ENV NX_HOST=localhost
ENV NX_PORT=80

RUN apk add --no-cache gettext

WORKDIR /var/www/

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build:static
RUN npm run build:front:prod
RUN npm run build:server

RUN envsubst < /var/www/build/.env.template.yml > /var/www/.env.yml

EXPOSE 80

CMD /bin/sh -c "envsubst < /var/www/build/.env.template.yml > /var/www/.env.yml && npm start"