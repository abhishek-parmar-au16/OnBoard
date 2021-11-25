const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let qualficationSchema = new Schema ({
    
    ten:{
        board:{
            type: String,
            required: true,
        },
        percentage:{
            type:Number,
            required:true,
            minlength: 5 
        },
        year:{
            type:Number,
            required:true,
            minlength:4
        },
    },
    // twelth:{
    //     board:{
    //         type: String,
    //         required: true,
    //     },
    //     percentage:{
    //         type:Number,
    //         required:true,
    //         minlength: 5 
    //     },
    //     year:{
    //         type:Number,
    //         required:true,
    //         minlength:4
    //     },
    // },
    // graduation:{
    //     board:{
    //         type: String,
    //         required: true,
    //     },
    //     percentage:{
    //         type:Number,
    //         required:true,
    //         minlength: 5 
    //     },
    //     year:{
    //         type:Number,
    //         required:true,
    //         minlength:4
    //     },
    // },
    // master:{
    //     board:{
    //         type: String,
    //         required: true,
    //     },
    //     percentage:{
    //         type:Number,
    //         required:true,
    //         minlength: 5 
    //     },
    //     year:{
    //         type:Number,
    //         required:true,
    //         minlength:4
    //     },
    // },
    
    
    

},{timestamps:true},
)

module.exports = mongoose.model('Qualificationinfo',qualficationSchema);
