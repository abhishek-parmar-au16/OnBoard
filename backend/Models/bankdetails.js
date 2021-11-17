const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let contactSchema = new Schema ({
    name: {
        type: String,
        required:true
    },
    bankName:{
        type: String,
        required:true
    },
    ifsc:{
        type: String,
        required:true
    },
    account_number:{
        type: Number,
        required: true
    }

},{timestamps:true},
)

module.exports = mongoose.model('Bankinfo',contactSchema);
