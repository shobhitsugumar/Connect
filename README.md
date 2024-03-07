# MeetVerse 
A video call Website Created using [Socket.io](https://socket.io/) and [Peerjs](https://peerjs.com/docs/#start)

- This project is a video call website built using PeerJS for peer-to-peer communication and SocketJS for real-time messaging. It allows users to initiate video calls with others, share their screens, and communicate via chat during the call.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)


## About

- This video call website is designed to provide a simple and efficient platform for video communication. It leverages the power of WebRTC through PeerJS for establishing peer-to-peer connections between users and SocketJS for enabling real-time messaging and signaling.

## Features

- Initiate video calls with others using a unique call link
- Support for group video calls
- Real-time chat feature for communication during calls
- High-quality audio and video transmission

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine using `git clone https://github.com/shobhitsugumar/MeetVerse.git`
2. Navigate to the project directory: `cd MeetVerse-website`
3. Install dependencies using your preferred package manager:
   - Using npm: `npm install`
   - Using yarn: `yarn install`

## Usage

After installing the dependencies, you can start the development server by running:

- To run the node server  "node server.js / nodemon server.js"
- Then start the peerjs server "peerjs --port 3040"

## Contributing 

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

- Fork the repository.
- Create a new branch (git checkout -b feature/add-new-feature).
- Make your changes.
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature/add-new-feature).
- Create a new pull request.

##   Questions 

1 ) What is WebRtc ?
- WebRtc stands for Web Real-Time-Communication ,is an open source project that enables real-time-communication capabilities directly in web browsers and other application .it allows developer to create a audio and video calling ,peer to peer data sharing and real time messaging into their web application without the need for additional plugin or software installation.WebSocket it self is a stateful connection.

2) What are the main components of Webrtc ?
- The main components of webRtc are
    * MediaStream : Represents streams of audio or video data captured from local media devices such as cameras and microphones.
    * RTCPeerConnection : Facilitates peer-to-peer communication by establishing and managing connections between peers, handling media negotiation, and transmitting data.
    * RTCDataChannel : It enables peer-to-peer communication where data can be exchanged directly between peers without the need for a server to relay the data.  RTCDataChannel allows peers to exchange arbitrary data, such as text, files, or binary data, directly between themselves.

3 ) What is a WebSocket ? 
- WebSocket is a communication protocol that provides a full duplex communication channels over a single TCP connection. It allows for real-time, bidirectional communication between the server and client,enabling efficient ,low -latency data exchange.

4 ) What is Socket.io ? 
- Socekt.io is a javascript library that enables real-time-communication .It is bidirectional communication between Web Clients and server using WebSocket. It provides an abstraction over WebSocket, offering additional features and fallback options for environments where WebSocket is not supported.

5 ) How does Socket.io handles fallback mechanisms for browsers that do not support Websocket?
- Socket.io provides a fallback mechanism that utilizes techniques like long polling, polling, and even WebSocket emulation to ensure compatibility with older browsers.

6 ) What is Peerjs ?
- PeeJs is a JavaScript library that simplifies WebRtc peer-to-peer connection by providing a higher-level-Api abstraction and handling the complexity of signaling,NAT traversal and peer discovery .
