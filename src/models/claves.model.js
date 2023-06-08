const {DataTypes} = require('sequelize')

const db = require('../utils/database')
const Clientes = require('./clientes.model')

const Claves = db.define('claves' ,{
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    rfc: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 70]
        }
    },
    CuentaBnacaria: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len : [2, 50]
        }
    },
    Ine: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    // clientId: {
    //     type: DataTypes.UUID,
    //     allowNull: false,
    //     references: {
    //         model: Clientes,
    //         key: 'id'
    //     }
    // }
 
})

module.exports = Claves