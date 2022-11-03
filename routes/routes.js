const express = require('express');
const getAlumnos = require('./controllers/get');
const postAlumnos = require('./controllers/post');
const putAlumnos = require('./controllers/put');
const deleteAlumnos = require('./controllers/delete');
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
router.post('/alumno', postAlumnos.postAlumno);
router.post('/escuela', postAlumnos.postEscuela);
router.post('/docente', postAlumnos.postDocente);
router.post('/administrativo', postAlumnos.postAdministrativo);
router.post('/mantenimiento', postAlumnos.postMantenimiento);
// PUT
router.put('/alumno/:id', putAlumnos.updateAlumno);
router.put('/escuela/:id', putAlumnos.updateEscuela);
router.put('/docente/:id', putAlumnos.updateDocente);
router.put('/administrativo/:id', putAlumnos.updateAdministrativo);
router.put('/mantenimiento/:id', putAlumnos.updateMantenimiento);
// DELETE
router.delete('/alumno/:id', deleteAlumnos.deleteAlumno);
router.delete('/escuela/:id', deleteAlumnos.deleteEscuela);
router.delete('/docente/:id', deleteAlumnos.deleteDocente);
router.delete('/administrativo/:id', deleteAlumnos.deleteAdministrativo);
router.delete('/mantenimiento/:id', deleteAlumnos.deleteMantenimiento);

module.exports = router;
