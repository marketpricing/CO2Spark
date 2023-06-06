const express = require('express')
const router = express.Router()

//Validation


//Load controllers
const{
    createPredictHistory,readdAllHistory

} = require('../controllers/application.controllers');

router.post('/create',createPredictHistory);
router.get('/read',readdAllHistory);




module.exports=router