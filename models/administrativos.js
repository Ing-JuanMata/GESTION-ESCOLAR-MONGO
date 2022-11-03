const { Schema, model } = require('mongoose');

const schema = new Schema({
  _id: Schema.Types.ObjectId,
  correo: String,
  cuenta: String,
  curp: String,
  escuela: Schema.Types.ObjectId,
  extension: String,
  funcion: String,
  horaEntrada: String,
  horaSalida: String,
  nombre: String,
  telefono: String,
});

const modelo = model('administrativos', schema);
module.exports = modelo;
