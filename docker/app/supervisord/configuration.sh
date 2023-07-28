#!/bin/bash

[ -d node_modules ]  && supervisorctl start app_run && exit 0

yarn cache clean --force && yarn install --no-progress &&

supervisorctl start app_run
