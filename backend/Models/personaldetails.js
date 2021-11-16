const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let personalSchema = new Schema ({
    name: {
        type: String
    },
    email: {
        type: String
    },
    dob :{
        type: String
    },
    gender :{
        type: String
    },
    presentAddress :{
        type: String
    },
    premenentAddress:{
        type: String
    },
    city: {
        type: String
    },
    state:{
        type: String
    },
    zipCode:{
        type: Number
    }

},{timestamps:true},
{
    collation: 'personal'
})

module.exports = mongoose.model('Personal',personalSchema);