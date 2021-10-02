FROM node:16-alpine

# add bash
RUN apk update
RUN apk upgrade
RUN apk add bash

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY ./ ./

EXPOSE 3001
CMD ["npm", "run", "start"]