const express = require('express');
const cors = require('cors');
const {readdirSync} = require('fs');
require('dotenv').config();


//App
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Database connection
require("./config/mongoConnect");

// const personalDetailsRoute = require('./routes/personalDetails');
// const contactInfo = require('./routes/contactInfo');

// PORT
const PORT = process.env.PORT || 6000;

app.get('/',(req,res)=>{
    res.send("Hello");

});

app.use(cors());
// app.use('/api',personalDetailsRoute,contactInfo);


readdirSync('./routes').map((r)=>
    app.use("/api",require("./routes/" + r))
);

app.listen(PORT,()=>{
    console.log(`server is up and running on ${PORT}`);
});