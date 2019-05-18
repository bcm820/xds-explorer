FROM node:10-alpine
ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY ./docker/server/* ./

COPY ./dist ./dist

RUN npm install

CMD ["npm", "start"]

EXPOSE 1337