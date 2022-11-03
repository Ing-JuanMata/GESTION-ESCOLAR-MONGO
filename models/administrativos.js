const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
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
  },
  { collection: 'administrativos' }
);

const modelo = model('administrativos', schema);
module.exports = modelo;
