const conexion = require('../controllers/conexion');

const postAdministrativo = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/administrativos');
    const administrativo = new modelo({
      _id: req.body._id,
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
    administrativo.save().then((administrativo) => {
      res.json(administrativo);
    });
  });
};

const postAlumno = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/alumnos');
    const alumno = new modelo({
      _id: req.body._id,
      curp: req.body.curp,
      escuela: req.body.escuela,
      fechaInscripcion: req.body.fechaInscripcion,
      fechaNacimiento: req.body.fechaNacimiento,
      grado: req.body.grado,
      nombre: req.body.nombre,
      tutor: req.body.tutor,
      tutoriaFirmada: req.body.tutoriaFirmada,
    });
    alumno.save().then((alumno) => {
      res.json(alumno);
    });
  });
};

const postDocente = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/docentes');
    const docente = new modelo({
      _id: req.body._id,
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
    docente.save().then((docente) => {
      res.json(docente);
    });
  });
};

const postEscuela = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/escuelas');
    const escuela = new modelo({
      _id: req.body._id,
      ciudad: req.body.ciudad,
      clave: req.body.clave,
      direccion: req.body.direccion,
      nombre: req.body.nombre,
    });
    escuela.save().then((escuela) => {
      res.json(escuela);
    });
  });
};

const postMantenimiento = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/mantenimientos');
    const mantenimiento = new modelo({
      _id: req.body._id,
      cuenta: req.body.cuenta,
      curp: req.body.curp,
      escuela: req.body.escuela,
      especialidad: req.body.especialidad,
      nombre: req.body.nombre,
      telefono: req.body.telefono,
      telefonoInstitucional: req.body.telefonoInstitucional,
    });
    mantenimiento.save().then((mantenimiento) => {
      res.json(mantenimiento);
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
