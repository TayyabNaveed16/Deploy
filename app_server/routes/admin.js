var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ctrlMain = require('../controllers/adminController.js');
const multer = require('multer');


// var upload = multer({
//     storage:Storage
// }).single('file');


// var Storage = multer.diskStorage({
//     destination:"./public/uploads/",
//     filename:(req,file,cb)=>{
//         cb(null, file.fieldname+"_" + Date.now()+ path.extname(file.originalname));
//     }
// });

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'public/uploads/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
//   })
//   const upload = multer({storage: storage})
// router.post('/addMovie', upload.single("file"), ctrlMain.addmovie);


//Get Routes
router.get('/', ctrlMain);

//Post Routes
router.post('/home', ctrlMain.addadmin);
router.post('/addAdmin', ctrlMain.addadmin);
router.post('/addCustomer', ctrlMain.addcustomer);
router.post('/addMovie', ctrlMain.addmovie);


//Delete Routes
router.delete('/deleteMovie/:name', ctrlMain.deletemovie);


module.exports = router;
