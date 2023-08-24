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

const io = socket(server,{
    cors:{
        // origin:"https://127.0.0.1:3000",  
        origin: '*',
        // origin: "http://localhost:5000",
        credentials: true,
        methods: ["GET", "POST"],
    },
});
// const io = require('socket.io')(server, { cors: { origin: '*' } });
// const io = socket(server, {
//     cors: {
//       origin: function (origin, callback) {
//         const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
//         if (!origin || allowedOrigins.includes(origin)) {
//           callback(null, true);
//         } else {
//           callback(new Error('Not allowed by CORS'));
//         }
//       },
//       credentials: true,
//       methods: ["GET", "POST"],
//     },
//   });

global.onlineUsers = new Map();
const activeUsers = [];
io.on("connection",(socket)=>{
  console.log("connected to socket.id :", socket.id);
    global.chatSocket = socket;

    socket.on("add-user",(userID)=>{
        onlineUsers.set(userID, socket.id);
        // console.log("userID/ currentUserid = ",userID);
        activeUsers.push(userID);
        io.emit("online-users",activeUsers);
    });
    // socket.on("temp",(err)=>{
    //   // onlineUsers.set( socket.id);
    //   console.log("message is :",err);
    // });

    socket.on("send-msg", (data)=>{
        console.log("message",{ data });
        const sendUserSocket = onlineUsers.get(data.to);
        // console.log("sendUserSocket to chat id :", data.to);
        // console.log("sendUserSocket is :", sendUserSocket);
        console.log("recieved data is ",data);
        console.log(data.from);
        if(sendUserSocket) {
            // console.log("dataa sent is : ", data.message);
            socket.to(sendUserSocket).emit("msg-receive",data.message,data.from);
            
        }
    });
   

    //here logout part

    socket.on("logout",(socketID)=>{
      console.log("logged out successfully",socketID);
      const socketIdToFind = socketID; // The socketId you want to find the userId for

let foundUserId = null;

for (const [userId, socketId] of onlineUsers.entries()) {
  if (socketId === socketIdToFind) {
    foundUserId = userId;
    break; // Exit the loop once the userId is found
  }
}
    const indexToRemove = activeUsers.indexOf(foundUserId);
if (indexToRemove !== -1) {
  activeUsers.splice(indexToRemove, 1);
}
onlineUsers.delete(foundUserId);
io.emit("online-users",activeUsers);
    })
   socket.on("disconnect",()=>{
    console.log("disConnected");
console.log(socket.id);

const socketIdToFind = socket.id; // The socketId you want to find the userId for

let foundUserId = null;

for (const [userId, socketId] of onlineUsers.entries()) {
  if (socketId === socketIdToFind) {
    foundUserId = userId;
    break; // Exit the loop once the userId is found
  }
}
    const indexToRemove = activeUsers.indexOf(foundUserId);
if (indexToRemove !== -1) {
  activeUsers.splice(indexToRemove, 1);
}
onlineUsers.delete(foundUserId);
io.emit("online-users",activeUsers);
   })

   

});