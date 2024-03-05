const socket = io("/");
const videoGrid = document.getElementById("video-grid");

//peer connection where we recieve and create connection
const peer = new Peer(undefined, {
  //this is the path that we did in server.js
  //path: "/peerjs",
  host: "/", //what ever like localhost or any hosting page
  port: "3040",
});

let myVideoStream;
const myvideo = document.createElement("video");
myvideo.muted = true;

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    myVideoStream = stream;
    addVideoStream(myvideo, stream);

    //answer the incoming call
    peer.on("call", (call) => {
      call.answer(stream); // Answer the call with an A/V stream.
      const video = document.createElement("video");
      call.on("stream", (userVideoStream) => {
        addVideoStream(video, userVideoStream);
      });
    });

    // we are respoding to the request which came from the server
    socket.on("user-connected", (userid) => {
      console.log("new user connected", userid);
      connectToNewUser(userid, stream);
    });
  });

//we are listening to the peer connection
peer.on("open", (id) => {
  //we are req the room id to the server
  socket.emit("join-room", ROOMID, id);
});

function connectToNewUser(userid, stream) {
  //Call another peer(ie another user) by calling peer.call with the peer ID of the destination peer.
  //When a peer calls you, the call event is emitted.
  //the Stream is my stream not the other user stream
  const call = peer.call(userid, stream);
  const video = document.createElement("video");
  //this stream is users stream
  call.on("stream", (userVideoStream) => {
    addVideoStream(video, userVideoStream);
  });
  call.on("close", () => {
    video.remove();
  });
}

function addVideoStream(video, stream) {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
}
