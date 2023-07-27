FROM node:16.20.0-alpine3.17

RUN apk update -U

RUN apk add -U supervisor

RUN npm update -g

CMD ["supervisord", "-c", "/etc/supervisord.conf"]
