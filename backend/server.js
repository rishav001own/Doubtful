const express = require("express");

//express app
const app = express()
app.use(express.json());


app.get('/',(req,res) =>console.log("rishav"));

//port
const PORT = process.env.PORT || 1100;

app.listen(PORT,() => console.log(`server is running at port : ${PORT}!`));