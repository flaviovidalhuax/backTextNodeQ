const router = require('express').Router()
const datosContacto=require('./datosContacto.service');

router.route('/')
    .get(datosContacto.getAllDatoContac)
    .post(datosContacto.postDatoCont)

module.exports = router