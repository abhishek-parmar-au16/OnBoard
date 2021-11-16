const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/addEmployee",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DATABASE CONNECTED SUCCESFULLY"))
    .catch((err) => console.log(`DATABASE CONNECTION FAILED ${err}`));

