const claveControlers=require('./clave.controler')

const getAllClave = (req, res) => {
    claveControlers.findAllClave()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const postClave = (req, res) => {
    const {rfc, CuentaBnacaria, Ine} = req.body
    claveControlers.createNewClave({rfc, CuentaBnacaria, Ine})
        .then(async(data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message, fields: {
                rfc: 'String',
                CuentaBnacaria: 'String',
                Ine: 'String'

            }}) 
        })
}   


module.exports={
    getAllClave,
    postClave
}