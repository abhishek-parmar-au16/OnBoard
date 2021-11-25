const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let contactSchema = new Schema ({
    name: {
        type: String,
        ref:'personal',
        required:true
    },
    phonenumber:{
        type: Number,
        required:true
    },
    alternativePhone_number:{
        type: Number
    },
    emergency_contactPerson_name:{
        type: String,
        required: true
    },
    emergency_contactPerson_number:{
        type: Number,
        required:true
    }
    

},{timestamps:true},
{
    collation: 'conatctinfo'
},)

module.exports = mongoose.model('Contactinfo',contactSchema);