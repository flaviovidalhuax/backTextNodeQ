const clientesControlers=require('./clientes.controlers');
//const {hashPassword}=require('../utils/crypto');
const mailer = require('../utils/mailer')
const getAllClients = (req, res) => {
    clientesControlers.findAllClients()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}
const getClientById = (req, res) => {
    const id = req.params.id
    clientesControlers.findClientById(id)
        .then((data) => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const postClient = (req, res) => {
    const {name,apellidoPaterno, apellidoMaterno, email, phone, gender} = req.body
    clientesControlers.createNewClient({name,apellidoPaterno, apellidoMaterno, email, phone, gender})
        .then(async(data) => {
            await mailer.sendMail({
                from: '<flaviovidalhuax@gmail.com>',
                to: data.email,
                subject: `Bienvenido ${data.name} ${data.apellidoPaterno}`,
                html: `<h1>Bienvenido te hemos registrado como clinete a nuestra base de dtatos: ${data.name} ${data.apellidoPaterno}</h1> <a href="www.cliente.com.mx" class="myButton">turquoise</a> `,
                text: 'Tus datos estan protejidos, es un correo de verificacion',
                
            })
            res.status(201).json(data)//!cuando se crea un usario se envía email
        })
        .catch((err) => {
            res.status(400).json({message: err.message, fields: {
                name: 'String',
                apellidoPaterno: 'String',
                apellidoMaterno: 'String',
                email: 'example@example.com',
                phone: 'String',
                gender: 'String',
            }}) 
        })
}   
const patchMyClient = (req, res) => {
    const id = req.client.id
    const {name,apellidoPaterno, apellidoMaterno, email, phone, gender} = req.body
    userControllers.updateUser(id, {name,apellidoPaterno, apellidoMaterno, email, phone, gender})
        .then((data) => {
            res.status(200).json({message: 'Your user was edited succesfully!'})
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}
const deleteMyClient = (req, res) => {
    const id = req.client.id 
    userControllers.deleteUser(id)
        .then(() => {
            res.status(204).json()
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}
module.exports={
    getAllClients,
    getClientById,
    postClient,
    patchMyClient,
    deleteMyClient


}