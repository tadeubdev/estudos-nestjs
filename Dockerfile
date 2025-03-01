FROM node:20.18.3-alpine3.20

RUN apk add bash

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app

COPY . .