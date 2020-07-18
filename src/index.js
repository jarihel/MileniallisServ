require('./ServerDB/config/config');

//==================================================================
//      VARIABLES   
//==================================================================
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//==================================================================
//      CONFIGURACION
//==================================================================
const puerto = process.env.PORT;
app.set('port', puerto);
app.set('views', path.join(__dirname, 'vistas'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//==================================================================
//      MIDELWARE
//==================================================================

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())




//==================================================================
//      RUTAS
//==================================================================
app.use(require('./rutas'));
app.use(require('./ServerDB/rutas/usuario'))



//==================================================================
//      ARCHIVOS ESTATICOS
//==================================================================

app.use(express.static(path.join(__dirname, 'public')));



app.listen(app.get('port'),'0.0.0.0', () => {
    console.log('Servidor en puerto', app.get('port'));
});

//==================================================================
//      CONEXION MONGO
//==================================================================

 
const url= process.env.URLDB;

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err, res) => {
 if (err) {

 throw err
 } else{
 console.log(`Base de datos Online`)
 }
});
