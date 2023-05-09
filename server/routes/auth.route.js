const express = require('express')
const router = express.Router()

//Validation
const{
    validSign,
    validLogin

} = require('../helpers/valid')


//Load controllers
const{
    registerController,
    signinController
} = require('../controllers/auth.controllers.js')


router.post('/register',validSign,registerController);

router.post('/login',validLogin,signinController);


module.exports=router