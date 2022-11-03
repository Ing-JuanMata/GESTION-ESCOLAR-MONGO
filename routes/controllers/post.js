const conectores = require('../controllers/conexion');
const conexion = conectores.mongo;
const redis = conectores.redis();
const { Types } = require('mongoose');

const postAdministrativo = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/administrativos');
    const administrativo = new modelo({
      _id: Types.ObjectId(req.body._id),
      correo: req.body.correo,
      cuenta: req.body.cuenta,
      curp: req.body.curp,
      escuela: req.body.escuela,
      extension: req.body.extension,
      funcion: req.body.funcion,
      horaEntrada: req.body.horaEntrada,
      horaSalida: req.body.horaSalida,
      nombre: req.body.nombre,
      telefono: req.body.telefono,
    });
    administrativo
      .save()
      .then((administrativo) => {
        redis.connect().then(() => {
          redis.set(
            `ADMINISTRATIVOS:POST:${new Date().getTime().toString()}`,
            `Registro de administrativo ${administrativo._id}`
          );
          redis.quit();
        });
        res.json(administrativo);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `ADMINISTRATIVOS:POST:${new Date().getTime().toString()}`,
            err.message
          );
          redis.quit();
        });
      });
  });
};

const postAlumno = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/alumnos');
    const alumno = new modelo({
      _id: Types.ObjectId(req.body._id),
      curp: req.body.curp,
      escuela: req.body.escuela,
      fechaInscripcion: req.body.fechaInscripcion,
      fechaNacimiento: req.body.fechaNacimiento,
      grado: req.body.grado,
      nombre: req.body.nombre,
      tutor: req.body.tutor,
      tutoriaFirmada: req.body.tutoriaFirmada,
    });
    alumno
      .save()
      .then((alumno) => {
        redis.connect().then(() => {
          redis.set(
            `ALUMNOS:POST:${new Date().getTime().toString()}`,
            `Registro de alumno ${alumno._id}`
          );
          redis.quit();
        });
        res.json(alumno);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `ALUMNOS:POST:${new Date().getTime().toString()}`,
            err.message
          );
          redis.quit();
        });
      });
  });
};

const postDocente = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/docentes');
    const docente = new modelo({
      _id: Types.ObjectId(req.body._id),
      cuenta: req.body.cuenta,
      curp: req.body.curp,
      escuela: req.body.escuela,
      especialidad: req.body.especialidad,
      grado: req.body.grado,
      nombre: req.body.nombre,
      numeroOficina: req.body.numeroOficina,
      telefono: req.body.telefono,
      tutoriasFirmadas: req.body.tutoriasFirmadas,
    });
    docente
      .save()
      .then((docente) => {
        redis.connect().then(() => {
          redis.set(
            `DOCENTES:POST:${new Date().getTime().toString()}`,
            `Registro de docente ${docente._id}`
          );
          redis.quit();
        });
        res.json(docente);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `DOCENTES:POST:${new Date().getTime().toString()}`,
            err.message
          );
          redis.quit();
        });
      });
  });
};

const postEscuela = (req, res) => {
  conexion().then(() => {
    console.log(req.body);
    const modelo = require('../../models/escuelas');
    const escuela = new modelo({
      _id: Types.ObjectId(req.body._id),
      ciudad: req.body.ciudad,
      clave: req.body.clave,
      direccion: req.body.direccion,
      nombre: req.body.nombre,
    });
    escuela
      .save()
      .then((escuela) => {
        redis.connect().then(() => {
          redis.set(
            `ESCUELAS:POST:${new Date().getTime().toString()}`,
            `Registro de escuela ${escuela._id}`
          );
          redis.quit();
        });
        res.json(escuela);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `ESCUELAS:POST:${new Date().getTime().toString()}`,
            err.message
          );
          redis.quit();
        });
      });
  });
};

const postMantenimiento = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/mantenimiento');
    const mantenimiento = new modelo({
      _id: Types.ObjectId(req.body._id),
      cuenta: req.body.cuenta,
      curp: req.body.curp,
      escuela: req.body.escuela,
      especialidad: req.body.especialidad,
      nombre: req.body.nombre,
      telefono: req.body.telefono,
      telefonoInstitucional: req.body.telefonoInstitucional,
    });
    mantenimiento
      .save()
      .then((mantenimiento) => {
        redis.connect().then(() => {
          redis.set(
            `MANTENIMIENTO:POST:${new Date().getTime().toString()}`,
            `Registro de mantenimiento ${mantenimiento._id}`
          );
          redis.quit();
        });
        res.json(mantenimiento);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `MANTENIMIENTO:POST:${new Date().getTime().toString()}`,
            err.message
          );
          redis.quit();
        });
      });
  });
};

module.exports = {
  postAdministrativo,
  postAlumno,
  postDocente,
  postEscuela,
  postMantenimiento,
};
