const router = require('express').Router()
const clientServices=require('./clientes.services');

// const passportJWT = require('../middlewares/auth.middleware')
// const roleMiddleware= require('../middlewares/role.middleware')
router.route('/')
    .get(clientServices.getAllClients)
    .post(clientServices.postClient)

module.exports = router
