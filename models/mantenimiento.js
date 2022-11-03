const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    cuenta: String,
    curp: String,
    escuela: Schema.Types.ObjectId,
    especialidad: String,
    nombre: String,
    telefono: String,
    telefonoInstitucional: String,
  },
  { collection: 'mantenimiento' }
);

const modelo = model('mantenimiento', schema);
module.exports = modelo;
