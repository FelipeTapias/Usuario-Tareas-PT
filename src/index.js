const express = require('express');
const conectarBD = require('./config/AdaptadorMongo');
require('dotenv').config({ path: 'variables.env' });

// Crear el servidor
const app = express();

// Conectar con Base de datos 
conectarBD();

// Permitir entrada de JSON
app.use(express.json())

// Rutas Usuarios
app.use('/api/usuarios', require('./routes/usuario'));

// Rutas Tareas
app.use('/api/tareas', require('./routes/tarea'));

app.listen(process.env.PORT, () => {
    console.log("Servidor --> Desplegado correctamente");
    console.log(`Servidor --> Escuchando en el puerto ${process.env.PORT}`);
});