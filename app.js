//configuracion

//1.Invocamos a express
const express = require('express');
const app = express();

//2. Seteamos urlencoded para capturar los datos
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//3. Invocamos a dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'})

//4. Seteamos el directorio public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

//5. Establecemos el motor de plantillas ejs
app.set('view engine', 'ejs');
app.set('views', './views');

//6. Variable para comprobar si el sistema tiene un puerto definido o utilizamos el puerto 3000
app.set('port', process.env.PORT || 3000);

//7. Invocamos al modulo de conexion a la BD
const connection = require('./database/db');

//8. Creacion de los middlewares, funciones que se ejecutan antes de las peticiones de los usuarios
const morgan = require('morgan');
app.use(morgan('dev'));



// Ruta principal
app.get('/admin', (req, res)=>{
    res.render('index');
});

app.get('/views/agregarservicio.ejs', (req, res)=>{
    res.render('agregarservicio');
});






//El servidor esta escuchando
app.listen(app.get('port'), ()=>{
    console.log('El servidor esta encendido');
});

