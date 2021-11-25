const mongoose = require('mongoose');
const contact = require('./contact');
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
    },
    contact:{
        type:Schema.Types.ObjectId,
        ref:'Contactinfo'

    }

},{timestamps:true},
{
    collation: 'personal'
})

module.exports = mongoose.model('Personal',personalSchema);