
const uuid=require('uuid')
const Claves = require('../models/claves.model')

const findAllClave = async () => {
    const data = await Claves.findAll()
    return data
}
const createNewClave = async (claveObj) => {
    const newClave = {
        id: uuid.v4(),
        rfc : claveObj.rfc,
        CuentaBnacaria : claveObj.CuentaBnacaria,
        Ine: claveObj.Ine,

    } 
    const data = await Claves.create(newClave)
    return data
}


module.exports={
    findAllClave,
    createNewClave
}