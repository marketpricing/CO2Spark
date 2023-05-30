const express = require('express')
const router = express.Router()

//Validation


//Load controllers
const{
detailUserController, readController

} = require('../controllers/user.controllers');

router.post('/create',detailUserController);
router.get('/read/:id',readController);



module.exports=router