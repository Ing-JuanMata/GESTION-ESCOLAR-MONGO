const mongoose = require('mongoose');

const conexion = () => {
  return mongoose.connect('mongodb://localhost:27017/gestionEscolar');
};

module.exports = conexion;
