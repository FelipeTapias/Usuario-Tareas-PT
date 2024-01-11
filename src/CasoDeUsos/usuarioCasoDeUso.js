const Usuario = require("../models/Usuario");

exports.EliminarUsuarioPorId = async (idUsuario) => {

    if(!await Usuario.findById(idUsuario)) 
        return 0;
    
    await Usuario.findOneAndDelete({ _id: idUsuario });

    return 1;
}