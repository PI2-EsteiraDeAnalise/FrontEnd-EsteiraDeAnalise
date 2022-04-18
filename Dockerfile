FROM node:lts-alpine as builder

WORKDIR /app

COPY package.json /app

RUN yarn

COPY . /app

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]
