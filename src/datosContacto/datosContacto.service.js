const dataContactoControlers=require('./datsoContacto.controler')

const getAllDatoContac = (req, res) => {
    dataContactoControlers.findAllDatoCont()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const postDatoCont = (req, res) => {
    const {empresa, representanteLegal, URL, domicilio, servicios} = req.body
    dataContactoControlers.createDatoCont({empresa, representanteLegal, URL, domicilio, servicios})
        .then(async(data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message, fields: {
                empresa: 'String',
                representanteLegal: 'String',
                URL: 'String',
                domicilio:'string',
                servicios:'string'

            }}) 
        })
}   


module.exports={
    getAllDatoContac,
    postDatoCont
}