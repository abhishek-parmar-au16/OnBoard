let express = require('express');


const router = express.Router();


let familySchema = require('../Models/familydetails');


router.route('/family-info').post((req,res,next)=>{
    familySchema.create(req.body,(err,data)=>{
        if(err){
            console.log(err);
            return next(err);
        } else{
            res.json(data);
        }
    });
});


module.exports = router;