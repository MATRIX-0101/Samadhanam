const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const dotenv = require("dotenv");
const app = express();
require("dotenv").config(); 

app.use(cors());
app.use(express.json());

app.use("/api/auth",userRoutes);




mongoose.connect(process.env.LOCAL_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("DB Connection Successful");
})
.catch((err) => {
    console.log(err.message);
})
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const userRoutes = require("./routes/userRoutes");

// const dotenv = require("dotenv");

// require("dotenv").config(); 

// app.use(cors());
// app.use(express.json());

// app.use("/api/auth",userRoutes);

app.get('/users/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'});
  });

mongoose.connect(process.env.LOCAL_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("DB Connection Successful");
})
.catch((err) => {
    console.log(err.message);
})

const server = app.listen(process.env.PORT,()=> {
    console.log(`Server is connected on PORT : ${process.env.PORT}`);
})