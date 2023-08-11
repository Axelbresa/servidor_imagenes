// Imports
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const cloudinary = require('cloudinary').v2;

// const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");
require("dotenv").config();
require("ejs");
const { sequelize } = require("./src/database/db");


const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload)
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(morgan("dev"));


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
//setting
const PORT = process.env.PORT || 3200;
// const rutas = require("./routes/users.routes");
// app.use(rutas);
app.use('/', require('./src/routes/galleries.routes'));

//static files
 app.use(express.static(path.join(__dirname,"public")))

// app.use((req, res)=>{
//   res.sendFile(path.join(__dirname,"../public/index.html"))
// })



//arrancampos el servidor
app.listen(PORT, function (req, res) {
  console.log("la app esta escuchando en http://localhost: " + PORT);
});

//conexion a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log("nos hemos conectado a la base de datos");
  })
  .catch((error) => {
    console.log("se ha producido un error", error);
  });
