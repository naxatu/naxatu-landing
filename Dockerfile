FROM node:9.8.0-alpine

ENV NX_HOST=localhost
ENV NX_PORT=80
ENV NX_CONTRACT="0x27f706edde3aD952EF647Dd67E24e38CD0803DD6"
ENV NX_FLAGS="[]"

RUN apk add --no-cache gettext git

WORKDIR /var/www/

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build:static
RUN npm run build:server
RUN npm run build:front:prod

RUN envsubst < /var/www/build/.env.template.yml > /var/www/.env.yml

EXPOSE 80

CMD /bin/sh -c "envsubst < /var/www/build/.env.template.yml > /var/www/.env.yml && npm start"