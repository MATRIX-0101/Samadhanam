const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();
require("dotenv").config(); 

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.LOCAL_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("DB Connection Successful");
})
.catch((err) => {
    console.log(err.stack);
})

const server = app.listen(process.env.PORT,()=> {
    console.log(`Server is connected on PORT : ${process.env.PORT}`);
})