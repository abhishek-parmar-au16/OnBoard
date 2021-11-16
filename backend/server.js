const express = require('express');
const cors = require('cors');
require('dotenv').config();


//App
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Database connection
require("./config/mongoConnect");

const personalDetailsRoute = require('./routes/personalDetails');

// PORT
const PORT = process.env.PORT || 6000;

app.get('/',(req,res)=>{
    res.send("Hello");

});

app.use(cors());
app.use('/api',personalDetailsRoute);

app.listen(PORT,()=>{
    console.log(`server is up and running on ${PORT}`);
});