const Users = require('./users.models')
const Clientes = require('./clientes.model')
const DatosContacto=require('./datosContacto.model')
const Claves=require('./claves.model')
const RecoveryPasswords = require('./recoveryPasswords.models')

const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)

    //!User->Clientes
    // Users.hasMany(Clientes)
    // Clientes.belongsTo(Users)

    //Clientes->Datos_Contacto
    Clientes.hasOne(DatosContacto)
    DatosContacto.belongsTo(Clientes)
    //!Clientes->Claves
    Clientes.hasOne(Claves)
    Claves.belongsTo(Clientes)
}

module.exports = initModels