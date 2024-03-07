const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const path = require("path");
const { v4: uuidv4 } = require("uuid");

/*
const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
  debug: true,
});*/

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

//peerjs route
//this path we will mention in script.js as path
//app.use("/peerjs", peerServer);

app.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomid: req.params.room });
});

io.on("connection", (socket) => {
  //the req that came from the client we are respoding
  socket.on("join-room", (roomid, userid) => {
    //the user joins the room

    socket.join(roomid);
    console.log("the room id and userid", roomid, userid);
    //in this line we are requesting to the client.using roomid we select the specific room and with to we create a namesapce(so the user within the roomid can interact)
    //.the brodcast is used to tell all the user in the room that a new user has been connected.
    socket.broadcast.emit("user-connected", userid);
    socket.on("message", (message) => {
      io.to(roomid).emit("createMessage", message);
    });

    socket.on("leaveRoom", () => {
      console.log("user left the room", roomid, "userid", userid);
      socket.leave(roomid);
      socket.broadcast.emit("user-left", userid);
    });
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`app is runnig on port ${port}`);
});
