const conectores = require('../controllers/conexion');
const conexion = conectores.mongo;
const redis = conectores.redis();

const deleteAdministrativo = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/administrativos');
    modelo.deleteOne({ _id: req.params.id }).then((administrativo) => {
      redis.connect().then(() => {
        redis.set(
          `ADMINISTRATIVOS:DELETE:${new Date().toISOString()}`,
          `Eliminacion de administrativo ${JSON.stringify(administrativo)}`
        );
        redis.quit();
      });
      res.header('Access-Control-Allow-Origin', '*').json(administrativo);
    });
  });
};

const deleteAlumno = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/alumnos');
    modelo.deleteOne({ _id: req.params.id }).then((alumno) => {
      redis.connect().then(() => {
        redis.set(
          `ALUMNOS:DELETE:${new Date().toISOString()}`,
          `Eliminacion de alumno ${JSON.stringify(alumno)}`
        );
        redis.quit();
      });
      res.header('Access-Control-Allow-Origin', '*').json(alumno);
    });
  });
};

const deleteDocente = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/docentes');
    modelo.deleteOne({ _id: req.params.id }).then((docente) => {
      redis.connect().then(() => {
        redis.set(
          `DOCENTES:DELETE:${new Date().toISOString()}`,
          `Eliminacion de docente ${JSON.stringify(docente)}`
        );
        redis.quit();
      });
      res.header('Access-Control-Allow-Origin', '*').json(docente);
    });
  });
};

const deleteEscuela = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/escuelas');
    modelo.deleteOne({ _id: req.params.id }).then((escuela) => {
      redis.connect().then(() => {
        redis.set(
          `ESCUELAS:DELETE:${new Date().toISOString()}`,
          `Eliminacion de escuela ${JSON.stringify(escuela)}`
        );
        redis.quit();
      });
      res.header('Access-Control-Allow-Origin', '*').json(escuela);
    });
  });
};

const deleteMantenimiento = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/mantenimiento');
    modelo.deleteOne({ _id: req.params.id }).then((mantenimiento) => {
      redis.connect().then(() => {
        redis.set(
          `MANTENIMIENTOS:DELETE:${new Date().toISOString()}`,
          `Eliminacion de mantenimiento ${JSON.stringify(mantenimiento)}`
        );
        redis.quit();
      });
      res.header('Access-Control-Allow-Origin', '*').json(mantenimiento);
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
