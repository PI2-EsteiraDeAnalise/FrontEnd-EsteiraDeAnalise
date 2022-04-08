FROM node:lts-alpine as builder

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . ./

EXPOSE 3000

CMD ["CHMOD" "777" "node_modules"]

CMD ["yarn", "start"]
