let express = require('express');


const router = express.Router();


let bankSchema = require('../Models/bankdetails');


router.route('/bank-info').post((req,res,next)=>{
    bankSchema.create(req.body,(err,data)=>{
        if(err){
            console.log(err);
            return next(err);
        } else{
            res.json(data);
        }
    });
});



module.exports = router;