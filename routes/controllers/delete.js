const conexion = require('./conexion');

const deleteAlumno = (req, res) => {
  conexion().then(() => {
    const modelo = require('../models/alumno');
    modelo.findByIdAndDelete(req.params.id, (err, alumno) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(alumno);
      }
    });
  });
};
