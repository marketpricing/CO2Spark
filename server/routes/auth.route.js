const express = require('express')
const router = express.Router()

//Validation
const{
    validSign,

} = require('../helpers/valid')


//Load controllers
const{
    registerController,
} = require('../controllers/auth.controllers.js')


router.post('/register',validSign,registerController);



module.exports=router