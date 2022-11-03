const conexion = require('../controllers/conexion');

const getAlumnos = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/alumnos');
    modelo.find().then((alumnos) => {
      res.json(alumnos);
    });
  });
};

const getAlumno = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/alumnos');
    modelo.findById(req.params.id).then((alumno) => {
      res.json(alumno);
    });
  });
};

const getEscuelas = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/escuelas');
    modelo.find().then((escuelas) => {
      res.json(escuelas);
    });
  });
};

const getEscuela = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/escuelas');
    modelo.findById(req.params.id).then((escuela) => {
      res.json(escuela);
    });
  });
};

const getDocentes = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/docentes');
    modelo.find().then((docentes) => {
      res.json(docentes);
    });
  });
};

const getDocente = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/docentes');
    modelo.findById(req.params.id).then((docente) => {
      res.json(docente);
    });
  });
};

const getAdmistrativos = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/administrativos');
    modelo.find().then((administrativos) => {
      res.json(administrativos);
    });
  });
};

const getAdmistrativo = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/administrativos');
    modelo.findById(req.params.id).then((administrativo) => {
      res.json(administrativo);
    });
  });
};

const getMantenimientos = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/mantenimiento');
    modelo.find().then((mantenimiento) => {
      res.json(mantenimiento);
    });
  });
};

const getMantenimiento = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/mantenimiento');
    modelo.findById(req.params.id).then((mantenimiento) => {
      res.json(mantenimiento);
    });
  });
};

module.exports = {
  getAlumnos,
  getAlumno,
  getEscuelas,
  getEscuela,
  getDocentes,
  getDocente,
  getAdmistrativos,
  getAdmistrativo,
  getMantenimientos,
  getMantenimiento,
};
