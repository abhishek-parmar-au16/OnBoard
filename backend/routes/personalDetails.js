let express = require('express');
let mongoose = require('mongoose');
router = express.Router();


let personalSchema = require('../Models/personaldetails');


router.route('/personal-details').post((req,res,next) =>{
    personalSchema.create(req.body,(err,data) =>{
        if(err) {
            console.log(err);
            return next(error)
        } else{
            console.log(data)
            res.json(data);
        }
    });
});



module.exports = router;