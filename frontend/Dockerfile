FROM node:lts-alpine

ENV NUXT_HOST=0.0.0.0

WORKDIR /app

EXPOSE 3000

COPY package*.json .

RUN npm install --production

COPY * .

CMD [ "npm", "start" ]