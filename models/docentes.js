const { Schema, model } = require('mongoose');

const schema = new Schema({
  _id: Schema.Types.ObjectId,
  cuenta: String,
  curp: String,
  escuela: Schema.Types.ObjectId,
  especialidad: String,
  grado: String,
  nombre: String,
  numeroOficina: Schema.Types.Number,
  telefono: String,
  tutorados: [Schema.Types.ObjectId],
  tutoriasFirmadas: Schema.Types.Boolean,
});

const modelo = model('docentes', schema);
module.exports = modelo;
