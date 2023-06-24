const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const messageRoute = require("./routes/messagesRoute");
const socket = require("socket.io");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config(); 

 app.use(cors());
 app.use(express.json());

 app.use("/api/auth",userRoutes);
 app.use("/api/messages",messageRoute);

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

// const io = socket(server,{
//     cors:{
//         // origin:"https://127.0.0.1:3000",
//         origin: "http://localhost:3000",
//         credentials: true,
//         methods: ["GET", "POST"],
//     },
// });
const io = socket(server, {
    cors: {
      header  : {
        "Access-Control-Allow-Origin": "*",
      },
      origin: function (origin, callback) {
        const allowedOrigins = ['http://localhost:3000'];
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: true,
      methods: ["GET", "POST"],
    },
  });

global.onlineUsers = new Map();

io.on("connection",(socket)=>{
    global.chatSocket = socket;
  
    socket.on("add-user", (userID)=>{
        onlineUsers.set(userID, socket.id);
    });

    socket.on("send-msg", (data)=>{
        const sendUserSocket = onlineUsers.get(data.to);
        if(sendUserSocket) {
            socket.to(sendUserSocket).emit("msg-receive",data.message);
            
        }
    });

});

