// Rutas para Usuario
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/CrearUsuario', usuarioController.crearUsuario);

router.get('/ObtenerUsuarios', usuarioController.obtenerUsuarios);
router.get('/ObtenerUsuarioPorId/:id', usuarioController.ObtenerUsuarioPorId);

router.put('/ActualizarUsuario/:id', usuarioController.actualizarUsuario);

router.delete('/EliminarUsuario/:id', usuarioController.EliminarUsuarioPorId);

module.exports = router;