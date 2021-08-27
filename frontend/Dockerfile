FROM node:16-alpine

ENV NUXT_HOST=0.0.0.0

WORKDIR /app

EXPOSE 3000

COPY package*.json .

RUN npm ci && 

RUN npm run build

CMD [ "npm", "run", "start" ]