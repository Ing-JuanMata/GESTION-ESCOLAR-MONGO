const express = require('express');
const get = require('./controllers/get');
const post = require('./controllers/post');
const put = require('./controllers/put');
const del = require('./controllers/delete');
const router = express.Router();

// GET
router.get('/alumnos', get.getAlumnos);
router.get('/alumnos/:id', get.getAlumno);
router.get('/escuelas', get.getEscuelas);
router.get('/escuelas/:id', get.getEscuela);
router.get('/escuelas/:id/docentes', get.getDocentesEscuela);
router.get('/escuelas/:id/administrativos', get.getAdministrativosEscuela);
router.get('/docentes', get.getDocentes);
router.get('/docentes/:id', get.getDocente);
router.get('/docentes/:id/tutorados', get.getTutorados);
router.get('/administrativos', get.getAdmistrativos);
router.get('/administrativos/:id', get.getAdmistrativo);
router.get('/mantenimientos', get.getMantenimientos);
router.get('/mantenimientos/:id', get.getMantenimiento);

// POST
router.post('/alumno', post.postAlumno);
router.post('/escuela', post.postEscuela);
router.post('/docente', post.postDocente);
router.post('/administrativo', post.postAdministrativo);
router.post('/mantenimiento', post.postMantenimiento);
// PUT
router.put('/alumno/:id', put.updateAlumno);
router.put('/escuela/:id', put.updateEscuela);
router.put('/docente/:id', put.updateDocente);
router.put('/administrativo/:id', put.updateAdministrativo);
router.put('/mantenimiento/:id', put.updateMantenimiento);
// DELETE
router.delete('/alumno/:id', del.deleteAlumno);
router.delete('/escuela/:id', del.deleteEscuela);
router.delete('/docente/:id', del.deleteDocente);
router.delete('/administrativo/:id', del.deleteAdministrativo);
router.delete('/mantenimiento/:id', del.deleteMantenimiento);

module.exports = router;
