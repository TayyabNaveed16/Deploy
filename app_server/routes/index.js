var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/indexController');


/* GET home page. */
router.put('/register/:rid', ctrlMain.register);
// router.put('/assign/:cid/student/:sid', ctrlMain.assignClassStudent);



module.exports = router;
