const conectores = require('../controllers/conexion');
const conexion = conectores.mongo;
const redis = conectores.redis();
const { Types } = require('mongoose');

const getAlumnos = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/alumnos');
    modelo.find().then((alumnos) => {
      redis.connect().then(() => {
        redis.set(
          `ALUMNOS:GET:${new Date().getTime().toString()}`,
          'Consulta de alumnos'
        );
        redis.quit();
      });
      res.json(alumnos);
    });
  });
};

const getAlumno = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/alumnos');
    modelo.findById(req.params.id).then((alumno) => {
      redis.connect().then(() => {
        redis.set(
          `ALUMNOS:GET:${new Date().getTime().toString()}`,
          `Consulta de alumno ${alumno._id}`
        );
        redis.quit();
      });
      res.json(alumno);
    });
  });
};

const getEscuelas = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/escuelas');
    modelo.find().then((escuelas) => {
      redis.connect().then(() => {
        redis.set(
          `ESCUELAS:GET:${new Date().getTime().toString()}`,
          'Consulta de escuelas'
        );
        redis.quit();
      });
      res.json(escuelas);
    });
  });
};

const getEscuela = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/escuelas');
    modelo.findById(req.params.id).then((escuela) => {
      redis.connect().then(() => {
        redis.set(
          `ESCUELAS:GET:${new Date().getTime().toString()}`,
          `Consulta de escuela ${escuela._id}`
        );
        redis.quit();
      });
      res.json(escuela);
    });
  });
};

const getDocentes = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/docentes');
    modelo.find().then((docentes) => {
      redis.connect().then(() => {
        redis.set(
          `DOCENTES:GET:${new Date().getTime().toString()}`,
          'Consulta de docentes'
        );
        redis.quit();
      });
      res.json(docentes);
    });
  });
};

const getDocente = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/docentes');
    modelo.findById(req.params.id).then((docente) => {
      redis.connect().then(() => {
        redis.set(
          `DOCENTES:GET:${new Date().getTime().toString()}`,
          `Consulta de docente ${docente._id}`
        );
        redis.quit();
      });
      res.json(docente);
    });
  });
};

const getAdmistrativos = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/administrativos');
    modelo.find().then((administrativos) => {
      redis.connect().then(() => {
        redis.set(
          `ADMINISTRATIVOS:GET:${new Date().getTime().toString()}`,
          'Consulta de administrativos'
        );
        redis.quit();
      });
      res.json(administrativos);
    });
  });
};

const getAdmistrativo = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/administrativos');
    modelo.findById(req.params.id).then((administrativo) => {
      redis.connect().then(() => {
        redis.set(
          `ADMINISTRATIVOS:GET:${new Date().getTime().toString()}`,
          `Consulta de administrativo ${administrativo._id}`
        );
        redis.quit();
      });
      res.json(administrativo);
    });
  });
};

const getMantenimientos = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/mantenimiento');
    modelo.find().then((mantenimiento) => {
      redis.connect().then(() => {
        redis.set(
          `MANTENIMIENTOS:GET:${new Date().getTime().toString()}`,
          'Consulta de mantenimientos'
        );
        redis.quit();
      });
      res.json(mantenimiento);
    });
  });
};

const getMantenimiento = (req, res) => {
  conexion().then(() => {
    const modelo = require('../../models/mantenimiento');
    modelo.findById(req.params.id).then((mantenimiento) => {
      redis.connect().then(() => {
        redis.set(
          `MANTENIMIENTOS:GET:${new Date().getTime().toString()}`,
          `Consulta de mantenimiento ${mantenimiento._id}`
        );
        redis.quit();
      });
      res.json(mantenimiento);
    });
  });
};

const getTutorados = (req, res) => {
  console.log(req.params);
  conexion().then(() => {
    const tutor = require('../../models/docentes');
    tutor
      .aggregate()
      .lookup({
        from: 'alumnos',
        localField: 'tutorados',
        foreignField: '_id',
        as: 'tutorados',
      })
      .match({ _id: Types.ObjectId(req.params.id) })
      .project({ tutorados: 1, _id: 0 })
      .then((tutor) => {
        redis.connect().then(() => {
          redis.set(
            `DOCENTES:GET:${new Date().getTime().toString()}`,
            `Consulta de tutorados de ${req.params.id}`
          );
          redis.quit();
        });
        res.json(tutor);
      });
  });
};

const getDocentesEscuela = (req, res) => {
  conexion().then(() => {
    const escuelas = require('../../models/escuelas');
    escuelas
      .aggregate()
      .lookup({
        from: 'docentes',
        localField: 'docentes',
        foreignField: '_id',
        as: 'docentes',
      })
      .match({ _id: Types.ObjectId(req.params.id) })
      .project({ docentes: 1, _id: 0 })
      .then((docentes) => {
        redis.connect().then(() => {
          redis.set(
            `ESCUELAS:GET:${new Date().getTime().toString()}`,
            `Consulta de docentes de ${req.params.id}`
          );
          redis.quit();
        });
        res.json(docentes);
      });
  });
};

const getAdministrativosEscuela = (req, res) => {
  conexion().then(() => {
    const escuelas = require('../../models/escuelas');
    escuelas
      .aggregate()
      .lookup({
        from: 'administrativos',
        localField: 'administrativos',
        foreignField: '_id',
        as: 'administrativos',
      })
      .match({ _id: Types.ObjectId(req.params.id) })
      .project({ administrativos: 1, _id: 0 })
      .then((administrativos) => {
        redis.connect().then(() => {
          redis.set(
            `ESCUELAS:GET:${new Date().getTime().toString()}`,
            `Consulta de administrativos de ${req.params.id}`
          );
          redis.quit();
        });
        res.json(administrativos);
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
  getTutorados,
  getDocentesEscuela,
  getAdministrativosEscuela,
};
