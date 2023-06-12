require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dbconf = require('./dbconfig/db.json');
const itemroute = require("./routes/itemroute"); 




//midddlewares
app.use(express.json());
app.use(cors());



app.use('/item',itemroute);

mongoose.set('strictQuery', true);
mongoose.connect(dbconf.mongo.uri);
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbconf.mongo.uri);
})

const port = process.env.PORT || 8000; 
app.listen(port,()=>console.log(`Listening on port $(port)...`));




module.exports = app; 