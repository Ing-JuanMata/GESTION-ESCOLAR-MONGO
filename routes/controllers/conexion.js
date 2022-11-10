const mongoose = require('mongoose');
const redis = require('redis');

const mongo = () => {
  return mongoose.connect('mongodb+srv://mata9909:TitanFold13258@cluster0.fkeew43.mongodb.net/gestionEscolar?retryWrites=true&w=majority');
};

const conRedis = () => {
  const client = redis.createClient();
  return client;
};
module.exports = { mongo, redis: conRedis };
