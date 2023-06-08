const router = require('express').Router()
const claveServices=require('./clave.services');

router.route('/')
    .get(claveServices.getAllClave)
    .post(claveServices.postClave)

module.exports = router