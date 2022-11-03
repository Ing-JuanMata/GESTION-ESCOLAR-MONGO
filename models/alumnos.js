const { Schema, model } = require('mongoose');


const schema = new Schema({
  _id: Schema.Types.ObjectId,
  curp: String,
  escuela: Schema.Types.ObjectId,
  fechaInscripcion: Schema.Types.Date,
  fechaNacimiento: Schema.Types.Date,
  grado: String,
  nombre: String,
  tutor: Schema.Types.ObjectId,
  tutoriaFirmada: Schema.Types.Boolean,
});

const modelo = model('alumnos', schema);
module.exports = modelo;
