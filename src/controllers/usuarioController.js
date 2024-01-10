const Usuario = require("../models/Usuario");

exports.crearUsuario = async (req, res) => {
    try {
        let usuario = new Usuario(req.body);

        await usuario.save();
        res.send(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error creando el usuario");
    }
}

exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error obteniendo los usuario");
    }
}

exports.actualizarUsuario = async (req, res) => {

    try {
        const id = req.params.id;
        const { nombre, correo, clave, tipoDocumento, documento } = req.body;
        let usuario = await Usuario.findById(id);

        if(!usuario) {
            res.status(404).json({msg: 'No existe el usuario'})
        }

        usuario.nombre = nombre;
        usuario.correo = correo;
        usuario.clave = clave;
        usuario.tipoDocumento = tipoDocumento;
        usuario.documento = documento ;

        usuario = await Usuario.findOneAndUpdate({ _id: id }, usuario, { new: true });

        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error actualizando el usuario");
    }
}

exports.ObtenerUsuarioPorId = async (req, res) => {

    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            res.status(404).json({msg: 'No existe el usuario'});
            res.setHeader('Content-Type', 'text/html');
        }

        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send(`Error obteniendo usuario con id: ${req.params.id}`);
    }
}

exports.EliminarUsuarioPorId = async (req, res) => {

    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            res.status(404).json({msg: 'No existe el usuario'});
            res.setHeader('Content-Type', 'text/html');
        }

        await Usuario.findOneAndDelete({ _id: req.params.id });

        res.json({ msg: 'Usuario eliminado con éxito' });

    } catch (error) {
        console.log(error);
        res.status(500).send(`Error eliminando usuario con id: ${req.params.id}`);
    }
}