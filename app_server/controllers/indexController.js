var customer = require('../models/customer');
var admin = require('../models/admin');
var movie = require('../models/movie');



module.exports.register = function (req, res,) {
        movie.findOneAndUpdate({rid: req.params.rid}, function (error, results){
            if (error){
                return next(error);
            }
            res.json(results);
        });
    };

