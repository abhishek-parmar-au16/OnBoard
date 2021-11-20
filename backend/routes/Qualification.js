let express = require('express');


const router = express.Router();


let qualficationSchema = require('../Models/qualifiactiondetails');


router.route('/qualification-info').post((req,res,next)=>{
    qualficationSchema.create(req.body,(err,data)=>{
        if(err){
            console.log(err);
            return next(err);
        } else{
            res.json(data);
        }
    });
});



module.exports = router;