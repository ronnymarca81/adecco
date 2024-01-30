#!/bin/sh
mongo --host localhost:27017/mydatabase /docker-entrypoint-initdb.d/mongo-init.js
npm start
