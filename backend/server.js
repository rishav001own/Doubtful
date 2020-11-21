require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');


//mongo
mongoose.connect(process.env.MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',() =>{
    console.log("Hey Your db connected so dont worry only you application enjoy ")
})

mongoose.connection.on('error',(err)=>{
    console.log("error while connecting db please check me")
})

//express app
const app = express()
app.use(express.json());

//require
require('./models/user')

//appuse
app.use(express.json())
app.use(require('./routes/user'))

//port
const PORT = process.env.PORT || 1100;

app.listen(PORT,() => console.log(`server is running at port : ${PORT}!`));