const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let qualficationSchema = new Schema ({
    name: {
        type: String,
        required:true
    },
    ssc:{
        type: Number,
        required:true
    },
    hsc:{
        type: Number,
        required:true
    },
    collegeName:{
        type: String,
        required: true
    },
    graduation:{
        type: Number,
        required: true
    }

},{timestamps:true},
)

module.exports = mongoose.model('Qualificationinfo',qualficationSchema);
