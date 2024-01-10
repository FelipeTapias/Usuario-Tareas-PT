// Rutas para tarea
const express = require('express');
const router = express.Router();
const tareaController = require("../controllers/tareaController");

router.post('/CrearTarea', tareaController.CrearTarea);

router.delete('/EliminarTarea/:id', tareaController.EliminarTarea);

router.get('/ObtenerTareasPorIdUsuario/:id', tareaController.ObtenerTareasPorIdUsuario);

module.exports = router;