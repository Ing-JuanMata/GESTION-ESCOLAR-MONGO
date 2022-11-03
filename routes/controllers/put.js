const conectores = require('../controllers/conexion');
const conexion = conectores.mongo;
const redis = conectores.redis();

const updateAdministrativo = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/administrativos');
    modelo
      .updateOne({ _id: req.params.id }, req.body)
      .then((administrativo) => {
        redis.connect().then(() => {
          redis.set(
            `ADMINISTRATIVOS:PUT:${new Date().getTime().toString()}`,
            `Actualizacion de administrativo ${administrativo._id}`
          );
          redis.quit();
        });
        res.json(administrativo);
      });
  });
};

const updateAlumno = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/alumnos');
    modelo.updateOne({ _id: req.params.id }, req.body).then((alumno) => {
      redis.connect().then(() => {
        redis.set(
          `ALUMNOS:PUT:${new Date().getTime().toString()}`,
          `Actualizacion de alumno ${alumno._id}`
        );
        redis.quit();
      });
      res.json(alumno);
    });
  });
};

const updateDocente = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/docentes');
    modelo.updateOne({ _id: req.params.id }, req.body).then((docente) => {
      redis.connect().then(() => {
        redis.set(
          `DOCENTES:PUT:${new Date().getTime().toString()}`,
          `Actualizacion de docente ${docente._id}`
        );
        redis.quit();
      });
      res.json(docente);
    });
  });
};

const updateEscuela = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/escuelas');
    modelo.updateOne({ _id: req.params.id }, req.body).then((escuela) => {
      redis.connect().then(() => {
        redis.set(
          `ESCUELAS:PUT:${new Date().getTime().toString()}`,
          `Actualizacion de escuela ${escuela._id}`
        );
        redis.quit();
      });
      res.json(escuela);
    });
  });
};

const updateMantenimiento = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/mantenimiento');
    modelo.updateOne({ _id: req.params.id }, req.body).then((mantenimiento) => {
      redis.connect().then(() => {
        redis.set(
          `MANTENIMIENTO:PUT:${new Date().getTime().toString()}`,
          `Actualizacion de mantenimiento ${mantenimiento._id}`
        );
        redis.quit();
      });
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
