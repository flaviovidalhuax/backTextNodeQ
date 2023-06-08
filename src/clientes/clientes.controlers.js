const Clientes=require('../models/clientes.model')
const uuid=require('uuid')

const findAllClients = async () => {
    const data = await Clientes.findAll()
    return data
}
const findClientById = async (id) => {
    const data = await Clientes.findOne({
        where: {
            id: id
        }
    })
    return data
}
const createNewClient = async (clientObj) => {
    const newClient = {
        id: uuid.v4(),
        name : clientObj.name,
        apellidoPaterno : clientObj.apellidoPaterno,
        apellidoMaterno: clientObj.apellidoMaterno,
        email: clientObj.email,
        phone: clientObj.phone,
        gender: clientObj.gender,
    }
    const data = await Clientes.create(newClient)
    return data
}
const updateClient = async (id, clientObj) => {
    //data === 1
    const data = await Clientes.update(clientObj,{
        where: {
            id: id
        }
    })
    return data[0]
}
const deleteClient = async (id) => {
    const data = await Clientes.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports={
    findAllClients,
    findClientById,
    createNewClient,
    updateClient,
    deleteClient
}