const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;



app.listen(()=>{
    console.log(`The server is running at ${PORT}`)
})