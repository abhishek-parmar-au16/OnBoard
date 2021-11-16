const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let personalSchema = new Schema ({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    dob :{
        type: String,
        required:true
    },
    gender :{
        type: String,
        required:true
    },
    presentAdd :{
        type: String,
        required:true
    },
    permanentAdd:{
        type: String,
        required:true
    },
    city: {
        type: String,
        required:true
    },
    state:{
        type: String,
        required:true
    },
    zip:{
        type: Number,
        required:true
    }

},{timestamps:true},
{
    collation: 'personal'
})

module.exports = mongoose.model('Personal',personalSchema);