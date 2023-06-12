require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dbconf = require('./dbconfig/db.json');
const itemroute = require("./routes/itemroute"); 
const crypto = require('crypto');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');


//midddlewares
app.use(express.json());
app.use(cors());



//routes
app.use('/item',itemroute);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


mongoose.set('strictQuery', true);
mongoose.connect(dbconf.mongo.uri);
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbconf.mongo.uri);
})

const port = process.env.PORT || 8000; 
app.listen(port,()=>console.log(`Listening on port $(port)...`));


const privateKey = crypto.randomBytes(32).toString('hex');
console.log(privateKey);

module.exports = app; 