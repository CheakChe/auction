FROM node:16.20.0-alpine3.17

RUN apk update -U

RUN apk add -U supervisor

RUN npm install -g npm@9.6.5

RUN npm update -g

CMD ["supervisord", "-c", "/etc/supervisord.conf"]
