const express = require('express');
const getAlumnos = require('./controllers/get');
const router = express.Router();

// GET
router.get('/alumnos', getAlumnos.getAlumnos);
router.get('/alumnos/:id', getAlumnos.getAlumno);
router.get('/escuelas', getAlumnos.getEscuelas);
router.get('/escuelas/:id', getAlumnos.getEscuela);
router.get('/docentes', getAlumnos.getDocentes);
router.get('/docentes/:id', getAlumnos.getDocente);
router.get('/administrativos', getAlumnos.getAdmistrativos);
router.get('/administrativos/:id', getAlumnos.getAdmistrativo);
router.get('/mantenimientos', getAlumnos.getMantenimientos);
router.get('/mantenimientos/:id', getAlumnos.getMantenimiento);

// POST

// PUT

// DELETE

module.exports = router;
