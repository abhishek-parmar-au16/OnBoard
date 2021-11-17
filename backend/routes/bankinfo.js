let express = require('express');


const router = express.Router();


let contactSchema = require('../Models/bankdetails');


router.route('/bank-info').post((req,res,next)=>{
    contactSchema.create(req.body,(err,data)=>{
        if(err){
            console.log(err);
            return next(err);
        } else{
            res.json(data);
        }
    });
});



module.exports = router;