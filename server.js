const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const app = express();
const server = http.createServer(app);
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const io = new Server(server);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomid: req.params.room });
});

io.on("connection", (socket) => {
  //the req that came from the client we are respoding
  socket.on("join-room", (roomid) => {
    //the user joins the room

    socket.join(roomid);
    console.log("the room id is", roomid);
    //in this line we are requesting to the client.using roomid we select the specific room and with to we create a namesapce(so the user within the roomid can interact)
    //.the brodcast is used to tell all the user in the room that a new user has been connected.
    socket.broadcast.emit("user-connected");
  });
});

server.listen(3000, () => {
  console.log("app is runnig on port 3000");
});
