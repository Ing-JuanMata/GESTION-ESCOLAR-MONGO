const conexion = require('./conexion');

const deleteAdministrativo = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/administrativos');
    modelo.deleteOne({ _id: req.params.id }).then((administrativo) => {
      res.json(administrativo);
    });
  });
};

const deleteAlumno = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/alumnos');
    modelo.deleteOne({ _id: req.params.id }).then((alumno) => {
      res.json(alumno);
    });
  });
};

const deleteDocente = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/docentes');
    modelo.deleteOne({ _id: req.params.id }).then((docente) => {
      res.json(docente);
    });
  });
};

const deleteEscuela = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/escuelas');
    modelo.deleteOne({ _id: req.params.id }).then((escuela) => {
      res.json(escuela);
    });
  });
};

const deleteMantenimiento = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/mantenimiento');
    modelo.deleteOne({ _id: req.params.id }).then((mantenimiento) => {
      res.json(mantenimiento);
    });
  });
};

module.exports = {
  deleteAdministrativo,
  deleteAlumno,
  deleteDocente,
  deleteEscuela,
  deleteMantenimiento,
};
