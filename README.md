# API SOBRE GESTION ESCOLAR (CASO 3)

> Esta api debe ser usada corriendo el proyecto, al estar utilizando un servicio en la nube directamente no es requisito que tenga los datos de mongo de forma local, sin embargo si es necesario que levante un contenedor de redis con el puerto 6379 publicado en su equipo

---

# RUTAS DE LA API

## ALUMNOS

### GET

- **CONSULTA DE TODOS LOS ALUMNOS**

**RUTA** `localhost:3000/alumnos`

**RESPUESTA**

```json
[
  {
    "_id": "6354613b44362eb42b2cf383",
    "curp": "19",
    "nombre": "Alexis",
    "fechaNacimiento": "1980-01-09T06:00:00.000Z",
    "tutor": "6352ba6b44362eb42b2cf37d",
    "tutoriaFirmada": false,
    "grado": "Preescolar",
    "fechaInscripcion": "2022-10-10T06:00:00.000Z",
    "escuela": "6352b18a44362eb42b2cf37a"
  },
  {
    "_id": "6354613b44362eb42b2cf384",
    "curp": "20",
    "nombre": "Alonso",
    "fechaNacimiento": "1980-02-09T06:00:00.000Z",
    "tutor": "6352ba6b44362eb42b2cf37e",
    "tutoriaFirmada": false,
    "grado": "Preescolar",
    "fechaInscripcion": "2022-10-10T06:00:00.000Z",
    "escuela": "6352b18a44362eb42b2cf37a"
  },
  {
    "_id": "6354613b44362eb42b2cf385",
    "curp": "21",
    "nombre": "Alfredo",
    "fechaNacimiento": "1980-03-09T06:00:00.000Z",
    "tutor": "6352ba6b44362eb42b2cf37f",
    "tutoriaFirmada": false,
    "grado": "Preescolar",
    "fechaInscripcion": "2022-10-10T06:00:00.000Z",
    "escuela": "6352b18a44362eb42b2cf37b"
  },
  {
    "_id": "6354613b44362eb42b2cf386",
    "curp": "22",
    "nombre": "Alexa",
    "fechaNacimiento": "1980-04-09T06:00:00.000Z",
    "tutor": "6352ba6b44362eb42b2cf380",
    "tutoriaFirmada": false,
    "grado": "Preescolar",
    "fechaInscripcion": "2022-10-10T06:00:00.000Z",
    "escuela": "6352b18a44362eb42b2cf37b"
  },
  {
    "_id": "6354613b44362eb42b2cf387",
    "curp": "23",
    "nombre": "Ximena",
    "fechaNacimiento": "1980-05-09T06:00:00.000Z",
    "tutor": "6352ba6b44362eb42b2cf381",
    "tutoriaFirmada": false,
    "grado": "Preescolar",
    "fechaInscripcion": "2022-10-10T06:00:00.000Z",
    "escuela": "6352b18a44362eb42b2cf37c"
  },
  {
    "_id": "6354613b44362eb42b2cf388",
    "curp": "24",
    "nombre": "Daniel",
    "fechaNacimiento": "1980-06-09T06:00:00.000Z",
    "tutor": "6352ba6b44362eb42b2cf382",
    "tutoriaFirmada": false,
    "grado": "Preescolar",
    "fechaInscripcion": "2022-10-10T06:00:00.000Z",
    "escuela": "6352b18a44362eb42b2cf37c"
  }
]
```

- **CONSULTA DE UN ALUMNO**

**RUTA** `localhost:3000/alumnos/:id`

**EJEMPLO** `localhost:3000/alumnos/6354613b44362eb42b2cf383`

```json
{
  "_id": "6354613b44362eb42b2cf383",
  "curp": "19",
  "nombre": "Alexis",
  "fechaNacimiento": "1980-01-09T06:00:00.000Z",
  "tutor": "6352ba6b44362eb42b2cf37d",
  "tutoriaFirmada": false,
  "grado": "Preescolar",
  "fechaInscripcion": "2022-10-10T06:00:00.000Z",
  "escuela": "6352b18a44362eb42b2cf37a"
}
```

### POST

- **RUTA DE POST** `localhost:3000/alumno`
- **MODELO REQUERIDO PARA LOS DATOS**

```json
{
  "_id": "Numero o cadena alfanumerica de 24 caracteres",
  "curp": "string",
  "escuela": "Numero o cadena alfanumerica de 24 caracteres",
  "fechaInscripcion": "YYYY-MM-DD",
  "fechaNacimiento": "YYYY-MM-DD",
  "grado": ["preescolar", "primaria", "secundaria", "preparatoria"],
  "nombre": "string",
  "tutor": "Numero o cadena alfanumerica de 24 caracteres",
  "tutoriaFirmada": "boolean"
}
```

- **EJEMPLO**

```json
{
  "_id": "000000000000000000000001",
  "curp": "CE001",
  "escuela": "63633e8d82e001194bb4d75f",
  "fechaInscripcion": "2022-08-10",
  "fechaNacimiento": "1999-07-15",
  "grado": "preparatoria",
  "nombre": "Saul",
  "tutor": "636341f268f446ebd8746326",
  "tutoriaFirmada": false
}
```

- **RESPUESTA**

```json
{
  "_id": "000000000000000000000001",
  "curp": "CE001",
  "escuela": "63633e8d82e001194bb4d75f",
  "fechaInscripcion": "2022-08-10T00:00:00.000Z",
  "fechaNacimiento": "1999-07-15T00:00:00.000Z",
  "grado": "preparatoria",
  "nombre": "Saul",
  "tutor": "636341f268f446ebd8746326",
  "tutoriaFirmada": false,
  "__v": 0
}
```

### PUT

- **RUTA DE PUT** `localhost:3000/alumno/:id`
- **EL MODELO ES EL MISMO QUE EL DEL METODO DE POST**
- **EJEMPLO** `localhost:3000/alumno/000000000000000000000001`

```json
{
  "curp": "CE001",
  "escuela": "63633e8d82e001194bb4d75f",
  "fechaInscripcion": "2022-08-10",
  "fechaNacimiento": "1999-07-15",
  "grado": "preparatoria",
  "nombre": "Omar",
  "tutor": "636341f268f446ebd8746326",
  "tutoriaFirmada": false
}
```

- **RESPUESTA**

```json
{
  "acknowledged": true,
  "modifiedCount": 1,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
}
```

### DELETE

- **RUTA DE DELETE** `localhost:3000/alumno/:id`
- **EJEMPLO** `localhost:3000/alumno/000000000000000000000001`
- **RESPUESTA**

```json
{
  "acknowledged": true,
  "deletedCount": 1
}
```

## ADMINISTRATIVOS

### GET

- **CONSULTA DE TODOS LOS ADMINISTRATIVOS**

**RUTA** `localhost:3000/administrativos`

**RESPUESTA**

```json
[
  {
    "_id": "6354638f44362eb42b2cf389",
    "curp": "13",
    "nombre": "Jose",
    "telefono": "123",
    "cuenta": "963852741",
    "funcion": "Coordinador",
    "extension": "1",
    "correo": "coordinacion@mail.com",
    "escuela": "6352b18a44362eb42b2cf37a",
    "horaEntrada": "7:00",
    "horaSalida": "14:00"
  },
  {
    "_id": "6354638f44362eb42b2cf38a",
    "curp": "14",
    "nombre": "Rafael",
    "telefono": "456",
    "cuenta": "951753462",
    "funcion": "Subcoordinador",
    "extension": "2",
    "correo": "subcoordinacion@mail.com",
    "escuela": "6352b18a44362eb42b2cf37a",
    "horaEntrada": "7:00",
    "horaSalida": "14:00"
  },
  {
    "_id": "6354638f44362eb42b2cf38b",
    "curp": "15",
    "nombre": "Alonso",
    "telefono": "123",
    "cuenta": "963852741",
    "funcion": "Coordinador",
    "extension": "1",
    "correo": "coordinacion2@mail.com",
    "escuela": "6352b18a44362eb42b2cf37b",
    "horaEntrada": "7:00",
    "horaSalida": "14:00"
  },
  {
    "_id": "6354638f44362eb42b2cf38c",
    "curp": "16",
    "nombre": "Raquel",
    "telefono": "456",
    "cuenta": "951753462",
    "funcion": "Subcoordinador",
    "extension": "2",
    "correo": "subcoordinacion2@mail.com",
    "escuela": "6352b18a44362eb42b2cf37b",
    "horaEntrada": "7:00",
    "horaSalida": "14:00"
  },
  {
    "_id": "6354638f44362eb42b2cf38d",
    "curp": "17",
    "nombre": "Alondra",
    "telefono": "123",
    "cuenta": "963852741",
    "funcion": "Coordinador",
    "extension": "1",
    "correo": "coordinacion3@mail.com",
    "escuela": "6352b18a44362eb42b2cf37c",
    "horaEntrada": "7:00",
    "horaSalida": "14:00"
  },
  {
    "_id": "6354638f44362eb42b2cf38e",
    "curp": "18",
    "nombre": "Francisco",
    "telefono": "456",
    "cuenta": "951753462",
    "funcion": "Subcoordinador",
    "extension": "2",
    "correo": "subcoordinacion3@mail.com",
    "escuela": "6352b18a44362eb42b2cf37c",
    "horaEntrada": "7:00",
    "horaSalida": "14:00"
  },
  {
    "_id": "000000000000000000000001",
    "correo": "admin@prepa.tec.mx",
    "cuenta": "1111222233334444",
    "curp": "CA001",
    "escuela": "6352b18a44362eb42b2cf37c",
    "extension": "210",
    "funcion": "Gerencia Academica",
    "horaEntrada": "8:00",
    "horaSalida": "14:00",
    "nombre": "Saul",
    "telefono": "3110234897",
    "__v": 0
  }
]
```

- **CONSULTA DE UN ADMINISTRATIVO**

**RUTA** `localhost:3000/administrativos/:id`

**EJEMPLO** `localhost:3000/administrativos/6354638f44362eb42b2cf389`

```json
{
  "_id": "6354638f44362eb42b2cf389",
  "curp": "13",
  "nombre": "Jose",
  "telefono": "123",
  "cuenta": "963852741",
  "funcion": "Coordinador",
  "extension": "1",
  "correo": "coordinacion@mail.com",
  "escuela": "6352b18a44362eb42b2cf37a",
  "horaEntrada": "7:00",
  "horaSalida": "14:00"
}
```

### POST

- **RUTA DE POST** `localhost:3000/administrativo`
- **MODELO REQUERIDO PARA LOS DATOS**

```json
{
  "_id": "Numero o cadena alfanumerica de 24 caracteres",
  "correo": "string",
  "cuenta": "string",
  "curp": "string",
  "escuela": "Numero o cadena alfanumerica de 24 caracteres",
  "extension": "string",
  "funcion": "string",
  "horaEntrada": "HH:MM",
  "horaSalida": "HH:MM",
  "nombre": "string",
  "telefono": "string"
}
```

- **EJEMPLO**

```json
{
  "_id": "000000000000000000000001",
  "correo": "admin@prepa.tec.mx",
  "cuenta": "1111222233334444",
  "curp": "CA001",
  "escuela": "63633e8d82e001194bb4d75f",
  "extension": "210",
  "funcion": "Gerencia Academica",
  "horaEntrada": "8:00",
  "horaSalida": "14:00",
  "nombre": "Saul",
  "telefono": "3110234897"
}
```

- **RESPUESTA**

```json
{
  "_id": "000000000000000000000001",
  "correo": "admin@prepa.tec.mx",
  "cuenta": "1111222233334444",
  "curp": "CA001",
  "escuela": "63633e8d82e001194bb4d75f",
  "extension": "210",
  "funcion": "Gerencia Academica",
  "horaEntrada": "8:00",
  "horaSalida": "14:00",
  "nombre": "Saul",
  "telefono": "3110234897",
  "__v": 0
}
```

### PUT

- **RUTA DE PUT** `localhost:3000/administrativo/:id`
- **EL MODELO ES EL MISMO QUE EL DEL METODO DE POST**
- **EJEMPLO** `localhost:3000/administrativo/000000000000000000000001`

```json
{
  "correo": "geraca@prepa.tec.mx",
  "cuenta": "1111222233334444",
  "curp": "CA001",
  "escuela": "63633e8d82e001194bb4d75f",
  "extension": "210",
  "funcion": "Gerencia Academica",
  "horaEntrada": "8:00",
  "horaSalida": "14:00",
  "nombre": "Saul",
  "telefono": "3110234890"
}
```

- **RESPUESTA**

```json
{
  "acknowledged": true,
  "modifiedCount": 1,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
}
```

### DELETE

- **RUTA DE DELETE** `localhost:3000/administrativo/:id`
- **EJEMPLO** `localhost:3000/administrativo/000000000000000000000001`
- **RESPUESTA**

```json
{
  "acknowledged": true,
  "deletedCount": 1
}
```

## DOCENTES

### GET

- **CONSULTA DE TODOS LOS DOCENTES**

**RUTA** `localhost:3000/docentes`

**RESPUESTA**

```json
[
  {
    "_id": "6352ba6b44362eb42b2cf37d",
    "curp": "1",
    "nombre": "Juan",
    "telefono": "123",
    "cuenta": "123456789",
    "numeroOficina": 1,
    "especialidad": "Preescolar",
    "grado": "Maestria",
    "tutorados": ["6354613b44362eb42b2cf383"],
    "tutoriasFirmadas": false,
    "escuela": "6352b18a44362eb42b2cf37a"
  },
  {
    "_id": "6352ba6b44362eb42b2cf37e",
    "curp": "2",
    "nombre": "Jesus",
    "telefono": "456",
    "cuenta": "987654321",
    "numeroOficina": 2,
    "especialidad": "Primaria",
    "grado": "Licenciatura",
    "tutorados": ["6354613b44362eb42b2cf384"],
    "tutoriasFirmadas": false,
    "escuela": "6352b18a44362eb42b2cf37a"
  },
  {
    "_id": "6352ba6b44362eb42b2cf37f",
    "curp": "3",
    "nombre": "Jorge",
    "telefono": "123",
    "cuenta": "1122334455",
    "numeroOficina": 1,
    "especialidad": "Preescolar",
    "grado": "Maestria",
    "tutorados": ["6354613b44362eb42b2cf385"],
    "tutoriasFirmadas": false,
    "escuela": "6352b18a44362eb42b2cf37b"
  },
  {
    "_id": "6352ba6b44362eb42b2cf380",
    "curp": "4",
    "nombre": "Julian",
    "telefono": "456",
    "cuenta": "5544332211",
    "numeroOficina": 2,
    "especialidad": "Primaria",
    "grado": "Licenciatura",
    "tutorados": ["6354613b44362eb42b2cf386"],
    "tutoriasFirmadas": false,
    "escuela": "6352b18a44362eb42b2cf37b"
  },
  {
    "_id": "6352ba6b44362eb42b2cf381",
    "curp": "5",
    "nombre": "Armando",
    "telefono": "123",
    "cuenta": "66778899",
    "numeroOficina": 1,
    "especialidad": "Preescolar",
    "grado": "Maestria",
    "tutorados": ["6354613b44362eb42b2cf387"],
    "tutoriasFirmadas": false,
    "escuela": "6352b18a44362eb42b2cf37c"
  },
  {
    "_id": "6352ba6b44362eb42b2cf382",
    "curp": "6",
    "nombre": "Ernesto",
    "telefono": "456",
    "cuenta": "99887766",
    "numeroOficina": 2,
    "especialidad": "Primaria",
    "grado": "Licenciatura",
    "tutorados": ["6354613b44362eb42b2cf388"],
    "tutoriasFirmadas": false,
    "escuela": "6352b18a44362eb42b2cf37c"
  }
]
```

- **CONSULTA DE UN DOCENTE**

**RUTA** `localhost:3000/docentes/:id`

**EJEMPLO** `localhost:3000/docentes/6352ba6b44362eb42b2cf37d`

```json
{
  "_id": "6352ba6b44362eb42b2cf37d",
  "curp": "1",
  "nombre": "Juan",
  "telefono": "123",
  "cuenta": "123456789",
  "numeroOficina": 1,
  "especialidad": "Preescolar",
  "grado": "Maestria",
  "tutorados": ["6354613b44362eb42b2cf383"],
  "tutoriasFirmadas": false,
  "escuela": "6352b18a44362eb42b2cf37a"
}
```

### POST

- **RUTA DE POST** `localhost:3000/docente`
- **MODELO REQUERIDO PARA LOS DATOS**

```json
{
  "_id": "Numero o cadena alfanumerica de 24 caracteres",
  "cuenta": "string",
  "curp": "string",
  "escuela": "Numero o cadena alfanumerica de 24 caracteres",
  "especialidad": "string",
  "grado": "string",
  "nombre": "string",
  "numeroOficina": "number",
  "tutoriasFirmadas": "boolean",
  "tutorados": "Arreglo de numeros o cadenas alfanumericas de 24 caracteres"
  "telefono": "string"
}
```

- **EJEMPLO**

```json
{
  "_id": "000000000000000000000001",
  "cuenta": "1111222233334444",
  "curp": "CA001",
  "escuela": "63633e8d82e001194bb4d75f",
  "especialidad": "Bases de datos",
  "grado": "Maestria",
  "nombre": "Jauregui",
  "numeroOficina": 1,
  "tutoriasFirmadas": false,
  "telefono": "3110234894"
}
```

- **RESPUESTA**

```json
{
  "_id": "000000000000000000000001",
  "cuenta": "1111222233334444",
  "curp": "CA001",
  "escuela": "63633e8d82e001194bb4d75f",
  "especialidad": "Bases de datos",
  "grado": "Maestria",
  "nombre": "Jauregui",
  "numeroOficina": 1,
  "telefono": "3110234894",
  "tutorados": [],
  "tutoriasFirmadas": false,
  "__v": 0
}
```

### PUT

- **RUTA DE PUT** `localhost:3000/docente/:id`
- **EL MODELO ES EL MISMO QUE EL DEL METODO DE POST**
- **EJEMPLO** `localhost:3000/docente/000000000000000000000001`

```json
{
  "cuenta": "1111222233334444",
  "curp": "CA001",
  "escuela": "63633e8d82e001194bb4d75f",
  "especialidad": "Bases de datos",
  "grado": "Maestria",
  "nombre": "Jauregui",
  "numeroOficina": 1,
  "telefono": "3110234894",
  "tutorados": ["636343b50b3599e5850100c4"],
  "tutoriasFirmadas": false
}
```

- **RESPUESTA**

```json
{
  "acknowledged": true,
  "modifiedCount": 1,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
}
```

### DELETE

- **RUTA DE DELETE** `localhost:3000/docente/:id`
- **EJEMPLO** `localhost:3000/docente/000000000000000000000001`
- **RESPUESTA**

```json
{
  "acknowledged": true,
  "deletedCount": 1
}
```

## ESCUELAS

### GET

- **CONSULTA DE TODOS LAS ESCUELAS**

**RUTA** `localhost:3000/escuelas`

**RESPUESTA**

```json
[
  {
    "_id": "6352b18a44362eb42b2cf37a",
    "clave": "1",
    "nombre": "Instituto Tecnologico de Tepic",
    "direccion": "Lagos del country",
    "ciudad": "Tepic",
    "docentes": ["6352ba6b44362eb42b2cf37d", "6352ba6b44362eb42b2cf37e"],
    "administrativos": ["6354638f44362eb42b2cf389", "6354638f44362eb42b2cf38a"],
    "mantenimiento": ["6354656544362eb42b2cf38f", "6354656544362eb42b2cf390"],
    "alumnos": ["6354613b44362eb42b2cf383", "6354613b44362eb42b2cf384"]
  },
  {
    "_id": "6352b18a44362eb42b2cf37b",
    "clave": "2",
    "nombre": "Universidad Tecnologica",
    "direccion": "Boulevard Tepic, Xalisco",
    "ciudad": "Xalisco",
    "docentes": ["6352ba6b44362eb42b2cf37f", "6352ba6b44362eb42b2cf380"],
    "administrativos": ["6354638f44362eb42b2cf38b", "6354638f44362eb42b2cf38c"],
    "mantenimiento": ["6354656544362eb42b2cf391", "6354656544362eb42b2cf392"],
    "alumnos": ["6354613b44362eb42b2cf385", "6354613b44362eb42b2cf386"]
  },
  {
    "_id": "6352b18a44362eb42b2cf37c",
    "clave": "3",
    "nombre": "Universidad Vizcaya",
    "direccion": "P. Sanchez",
    "ciudad": "Tepic",
    "docentes": ["6352ba6b44362eb42b2cf381", "6352ba6b44362eb42b2cf382"],
    "administrativos": [
      "6354638f44362eb42b2cf38d",
      "6354638f44362eb42b2cf38e",
      "000000000000000000000001"
    ],
    "mantenimiento": ["6354656544362eb42b2cf393", "6354656544362eb42b2cf394"],
    "alumnos": ["6354613b44362eb42b2cf387", "6354613b44362eb42b2cf388"]
  }
]
```

- **CONSULTA DE UNA ESCUELA**

**RUTA** `localhost:3000/escuelas/:id`

**EJEMPLO** `localhost:3000/escuelas/6352b18a44362eb42b2cf37a`

```json
{
  "_id": "6352b18a44362eb42b2cf37a",
  "clave": "1",
  "nombre": "Instituto Tecnologico de Tepic",
  "direccion": "Lagos del country",
  "ciudad": "Tepic",
  "docentes": ["6352ba6b44362eb42b2cf37d", "6352ba6b44362eb42b2cf37e"],
  "administrativos": ["6354638f44362eb42b2cf389", "6354638f44362eb42b2cf38a"],
  "mantenimiento": ["6354656544362eb42b2cf38f", "6354656544362eb42b2cf390"],
  "alumnos": ["6354613b44362eb42b2cf383", "6354613b44362eb42b2cf384"]
}
```

### POST

- **RUTA DE POST** `localhost:3000/escuela`
- **MODELO REQUERIDO PARA LOS DATOS**

```json
{
  "_id": "Numero o cadena alfanumerica de 24 caracteres",
  "ciudad": "Tepic",
  "clave": "1",
  "direccion": "Insurgentes #12",
  "nombre": "PreparaTec",
  "docentes": "Arreglo de numeros o cadenas alfanumericas de 24 caracteres",
  "administrativos": "Arreglo de numeros o cadenas alfanumericas de 24 caracteres",
  "mantenimiento": "Arreglo de numeros o cadenas alfanumericas de 24 caracteres",
  "alumnos": "Arreglo de numeros o cadenas alfanumericas de 24 caracteres"
}
```

- **EJEMPLO**

```json
{
  "_id": "000000000000000000000001",
  "ciudad": "Tepic",
  "clave": "1",
  "direccion": "Insurgentes #12",
  "nombre": "PreparaTec"
}
```

- **RESPUESTA**

```json
{
  "_id": "000000000000000000000001",
  "administrativos": [],
  "alumnos": [],
  "ciudad": "Tepic",
  "clave": "1",
  "direccion": "Insurgentes #12",
  "docentes": [],
  "mantenimiento": [],
  "nombre": "PreparaTec",
  "__v": 0
}
```

### PUT

- **RUTA DE PUT** `localhost:3000/escuela/:id`
- **EL MODELO ES EL MISMO QUE EL DEL METODO DE POST**
- **EJEMPLO** `localhost:3000/escuela/000000000000000000000001`

```json
{
  "ciudad": "Tepic",
  "clave": "1",
  "direccion": "Insurgentes #12",
  "nombre": "PreparaTec",
  "administrativos": ["636340cbb1827b423bd394a1"],
  "alumnos": ["636343b50b3599e5850100c4"],
  "docentes": ["636341f268f446ebd8746326"],
  "mantenimiento": ["63633fd4b1827b423bd3949f"]
}
```

- **RESPUESTA**

```json
{
  "acknowledged": true,
  "modifiedCount": 1,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
}
```

### DELETE

- **RUTA DE DELETE** `localhost:3000/escuela/:id`
- **EJEMPLO** `localhost:3000/escuela/000000000000000000000001`
- **RESPUESTA**

```json
{
  "acknowledged": true,
  "deletedCount": 1
}
```

## MANTENIMIENTO

### GET

- **CONSULTA DE TODO EL PERSONAL DE MANTENIMIENTO**

**RUTA** `localhost:3000/mantenimientos`

**RESPUESTA**

```json
[
  {
    "_id": "6354656544362eb42b2cf38f",
    "curp": "7",
    "nombre": "Jose",
    "telefono": "123",
    "cuenta": "66778899",
    "telefonoInstitucional": "1234567890",
    "especialidad": "Electrica",
    "escuela": "6352b18a44362eb42b2cf37a"
  },
  {
    "_id": "6354656544362eb42b2cf390",
    "curp": "8",
    "nombre": "Enrique",
    "telefono": "456",
    "cuenta": "99887766",
    "telefonoInstitucional": "0987654321",
    "especialidad": "Carpinteria",
    "escuela": "6352b18a44362eb42b2cf37a"
  },
  {
    "_id": "6354656544362eb42b2cf391",
    "curp": "9",
    "nombre": "Luis",
    "telefono": "123",
    "cuenta": "111222333",
    "telefonoInstitucional": "1234567890",
    "especialidad": "Electrica",
    "escuela": "6352b18a44362eb42b2cf37b"
  },
  {
    "_id": "6354656544362eb42b2cf392",
    "curp": "10",
    "nombre": "Lazaro",
    "telefono": "456",
    "cuenta": "444555666",
    "telefonoInstitucional": "0987654321",
    "especialidad": "Carpinteria",
    "escuela": "6352b18a44362eb42b2cf37b"
  },
  {
    "_id": "6354656544362eb42b2cf393",
    "curp": "11",
    "nombre": "Tanya",
    "telefono": "123",
    "cuenta": "321654987",
    "telefonoInstitucional": "1234567890",
    "especialidad": "Electrica",
    "escuela": "6352b18a44362eb42b2cf37c"
  },
  {
    "_id": "6354656544362eb42b2cf394",
    "curp": "12",
    "nombre": "Antonio",
    "telefono": "456",
    "cuenta": "369258147",
    "telefonoInstitucional": "0987654321",
    "especialidad": "Carpinteria",
    "escuela": "6352b18a44362eb42b2cf37c"
  }
]
```

- **CONSULTA DE UN MANTENIMIENTO**

**RUTA** `localhost:3000/mantenimiento/:id`

**EJEMPLO** `localhost:3000/mantenimiento/6354656544362eb42b2cf38f`

```json
{
  "_id": "6354656544362eb42b2cf38f",
  "curp": "7",
  "nombre": "Jose",
  "telefono": "123",
  "cuenta": "66778899",
  "telefonoInstitucional": "1234567890",
  "especialidad": "Electrica",
  "escuela": "6352b18a44362eb42b2cf37a"
}
```

### POST

- **RUTA DE POST** `localhost:3000/mantenimiento`
- **MODELO REQUERIDO PARA LOS DATOS**

```json
{
  "_id": "Numero o cadena alfanumerica de 24 caracteres",
  "ciudad": "Tepic",
  "clave": "1",
  "direccion": "Insurgentes #12",
  "nombre": "PreparaTec",
  "docentes": "Arreglo de numeros o cadenas alfanumericas de 24 caracteres",
  "administrativos": "Arreglo de numeros o cadenas alfanumericas de 24 caracteres",
  "mantenimiento": "Arreglo de numeros o cadenas alfanumericas de 24 caracteres",
  "alumnos": "Arreglo de numeros o cadenas alfanumericas de 24 caracteres"
}

{
    "_id":"Numero o cadena alfanumerica de 24 caracteres",
    "cuenta": "string",
    "curp": "string",
    "escuela": "Numero o cadena alfanumerica de 24 caracteres",
    "especialidad": "string",
    "nombre": "string",
    "telefono": "string",
    "telefonoInstitucional": "string"
}
```

- **EJEMPLO**

```json
{
  "_id": "000000000000000000000001",
  "cuenta": "6679667966796679",
  "curp": "C10",
  "escuela": "63633e8d82e001194bb4d75f",
  "especialidad": "Electricista",
  "nombre": "Jaime",
  "telefono": "3112114567",
  "telefonoInstitucional": "3500"
}
```

- **RESPUESTA**

```json
{
  "_id": "000000000000000000000001",
  "cuenta": "6679667966796679",
  "curp": "C10",
  "escuela": "63633e8d82e001194bb4d75f",
  "especialidad": "Electricista",
  "nombre": "Jaime",
  "telefono": "3112114567",
  "telefonoInstitucional": "3500",
  "__v": 0
}
```

### PUT

- **RUTA DE PUT** `localhost:3000/mantenimiento/:id`
- **EL MODELO ES EL MISMO QUE EL DEL METODO DE POST**
- **EJEMPLO** `localhost:3000/mantenimiento/000000000000000000000001`

```json
{
  "ciudad": "Tepic",
  "clave": "1",
  "direccion": "Insurgentes #12",
  "nombre": "PreparaTec",
  "administrativos": ["636340cbb1827b423bd394a1"],
  "alumnos": ["636343b50b3599e5850100c4"],
  "docentes": ["636341f268f446ebd8746326"],
  "mantenimiento": ["63633fd4b1827b423bd3949f"]
}
```

- **RESPUESTA**

```json
{
  "acknowledged": true,
  "modifiedCount": 1,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
}
```

### DELETE

- **RUTA DE DELETE** `localhost:3000/mantenimiento/:id`
- **EJEMPLO** `localhost:3000/mantenimiento/000000000000000000000001`
- **RESPUESTA**

```json
{
  "acknowledged": true,
  "deletedCount": 1
}
```
