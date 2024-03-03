const socket = io("/");
const vidoeGrid = document.getElementById("video-grid");
const myvideo = document.createElement("video");
myvideo.muted = true;

let myVideoStream;
navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    myVideoStream = stream;
    addVideoStream(myvideo, myVideoStream);
  });
//we are req the room id to the server
socket.emit("join-room", ROOMID);

// we are respoding to the request
socket.on("user-connected", () => {
  connectToNewUser();
});

const connectToNewUser = () => {
  console.log("new user");
};

const addVideoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  vidoeGrid.append(video);
};
