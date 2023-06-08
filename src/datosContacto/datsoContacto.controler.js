
const uuid=require('uuid')
const DatosContacto = require('../models/datosContacto.model')

const findAllDatoCont = async () => {
    const data = await DatosContacto.findAll()
    return data
}
const createDatoCont = async (datsoObj) => {
    const newDato = {
        id: uuid.v4(),
        empresa : datsoObj.empresa,
        representanteLegal : datsoObj.representanteLegal,
        URL: datsoObj.URL,
        domicilio: datsoObj.domicilio,
        servicios: datsoObj.servicios
    } 
    const data = await DatosContacto.create(newDato)
    return data
}


module.exports={
    findAllDatoCont,
    createDatoCont
}