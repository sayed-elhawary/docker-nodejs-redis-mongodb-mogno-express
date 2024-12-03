const express = require("express");
const app = express();
const mongoose = require('mongoose');
const DB_USER = "root";
const DB_PASSWORD = "example";
const DB_PORT = 27017;
const DB_HOST = 'mongo' ;
const redis = require('redis');
const REDIS_HOST = 'redis';
const REDIS_PORT = 6379;

const redisClient = redis.createClient({
  url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
});
redisClient.on('error', err => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('connected to redis'));
redisClient.connect();

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`

mongoose
  .connect(URI)
  .then(() => console.log('connected to database'))
  .catch((err) => console.log ('faile to database: ', err));

app.get("/", function(req, res) {
    return res.send("Hello   World as a running express Bind Mout volumes @@  ");
});

app.listen(4000, function(){
    console.log('Listening on port 4000');
});
