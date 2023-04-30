#!/bin/sh

[ ! -f .env ] && cp .env.example .env

docker compose up --no-deps --build