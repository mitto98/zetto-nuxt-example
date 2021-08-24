FROM node:lts-alpine

ENV APP_ROOT /src
ENV NUXT_HOST=0.0.0.0

RUN mkdir -p ${APP_ROOT}
WORKDIR ${APP_ROOT}

COPY . ${APP_ROOT}

RUN npm install --production

EXPOSE 3000

CMD [ "npm", "start" ]