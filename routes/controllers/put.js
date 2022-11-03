const conexion = require('../controllers/conexion');

const updateAdministrativo = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/administrativos');
    modelo
      .updateOne({ _id: req.params.id }, req.body)
      .then((administrativo) => {
        res.json(administrativo);
      });
  });
};

const updateAlumno = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/alumnos');
    modelo.updateOne({ _id: req.params.id }, req.body).then((alumno) => {
      res.json(alumno);
    });
  });
};

const updateDocente = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/docentes');
    modelo.updateOne({ _id: req.params.id }, req.body).then((docente) => {
      res.json(docente);
    });
  });
};

const updateEscuela = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/escuelas');
    modelo.updateOne({ _id: req.params.id }, req.body).then((escuela) => {
      res.json(escuela);
    });
  });
};

const updateMantenimiento = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/mantenimiento');
    modelo.updateOne({ _id: req.params.id }, req.body).then((mantenimiento) => {
      res.json(mantenimiento);
    });
  });
};

module.exports = {
  updateAdministrativo,
  updateAlumno,
  updateDocente,
  updateEscuela,
  updateMantenimiento,
};
