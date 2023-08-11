conexion a cloudinay

Trabajo Práctico de Desarrollo e Investigación de cloudinary y exprees-fileupload

El objetivo de este trabajo es invertigas, diseñar y desarrollar un servidor utilizando Node.js y Express, junto con el motor de plantillas EJS, para crear un servidor que pueda subir y modificar imagenes, con operaciones CRUD (Crear, Leer, Actualizar y Borrar).. El proyecto involucra la implementación de una base de datos MySQL para el seguimiento y almacenamiento de información relacionada con las imágenes, incluida la compatibilidad con la librería expressfileupload para la carga de archivos.



Instalación:

npm install

Configurar variables de entorno:

PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
DB_DIALECT=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

configurar el packaje.json:

 "scripts": {
    "dev" : "nodemon app.js"
  }

Ejecución en desarrollo:

npm run dev