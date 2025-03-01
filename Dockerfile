FROM node:20.18.3-alpine3.20

RUN apk add bash

USER node

WORKDIR /home/node/app

COPY . .