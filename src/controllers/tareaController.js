const Tarea = require("../models/Tareas");
const Usuario = require("../models/Usuario");

exports.CrearTarea = async (req, res) => {
    try {

        let usuario = await Usuario.findById(req.body.idPropietario);

        if(!usuario) 
            res.status(404).json({msg: 'No se puede crear la tarea porque el usuario no existe'})
        
        let tarea = new Tarea(req.body);
        await tarea.save();
        res.send(tarea)

    } catch (error) {
        console.log(error);
        res.status(500).send("Error creando la tarea");
    }
}

exports.EliminarTarea = async (req, res) => {
    await Tarea.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: 'Tarea eliminada con éxito'});
}

exports.ObtenerTareasPorIdUsuario = async (req, res) => {

    try {
        let tareas = await Tarea.find({ idPropietario: req.params.id});

        if(!tareas.length > 0) {
            res.status(404).json({msg: 'El usuario no tiene tareas'});
            res.setHeader('Content-Type', 'text/html');
        }

        res.json(tareas);

    } catch (error) {
        console.log(error);
        res.status(500).send(`Error obteniendo las tareas del usuario con idUsuario: ${req.params.id}`);
    }
}