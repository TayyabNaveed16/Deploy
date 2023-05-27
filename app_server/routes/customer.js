var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ctrlMain = require('../controllers/customerController.js');


router.get('/', ctrlMain);


module.exports = router;