const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let familySchema = new Schema ({
    fName: {
        type: String,
        required:true
    },
    fOccupation:{
        type: String,
        required:true
    },
    fDob:{
        type: String
    },
    mName: {
        type: String,
        required:true
    },
    mOccupation:{
        type: String,
        required:true
    },
    mDob:{
        type: String
    },
    other:{
        type: String,
    }, 
    oName: {
        type: String,
        
    },
    oQualification:{
        type: String,
        
    },
    others:{
        type: String,
    },
    oNames: {
        type: String,
        
    },
    oQualifications:{
        type: String,
        
    }

},{timestamps:true},
)

module.exports = mongoose.model('Familyinfo',familySchema);