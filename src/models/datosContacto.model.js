const {DataTypes} = require('sequelize')

const db = require('../utils/database')
const Clientes = require('./clientes.model')

const DatosContacto = db.define('datos_contacto' ,{
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    empresa: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 50]
        }
    },
    representanteLegal: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len : [2, 100]
        }
    },
    URL: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    domicilio: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    servicios: {
        type: DataTypes.TEXT,
    },
    clienteId:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Clientes,
            key: 'id'
        }
    }
 
})

module.exports = DatosContacto