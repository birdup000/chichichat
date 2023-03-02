<html lang="en">

<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.0/jquery.min.js"></script>
    <title>Home</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="bees.png" type="image/x-icon">
      <!-- Set the ROOM_ID variable to the roomId that is passed in by server.js -->
  <script>
    const ROOM_ID = "<%= roomId %>"
  </script>
  <!-- CDN in the peerJS and socket.io libraries -->
  <script defer src="https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js"></script>
  <script src="/socket.io/socket.io.js" defer></script>
  <!-- Load in script.js, our client-side script -->
  <script src="/api/videocalling.js" defer></script>
    <style>
        body {
  shape-margin: 5% black;
  background-color: black;
  font-style: normal;
}
h1 {
  color: #FFFF;
}
h2 {
  color: #FFFF;
}

p {
  color: #FFFF;
}

/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
  text-align: center;
  border-radius: 5px;

}

/* Style the links inside the navigation bar */
.topnav a {
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  -webkit-box-shadow: 5px 5px 5px rgba(68, 196, 132, 0.712);
          box-shadow: 5px 5px 5px rgba(68, 196, 132, 0.712);
  width: 80px;
  display: inline-block;
  border-radius: 5px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
  border-radius: 5px;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #414141;
  color: white;
}

.content {
  color: #4b4949;
}

body {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    #video-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, 300px);
      grid-auto-rows: 300px;
      justify-content: center;
      gap: 20px;
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    #controls {
      display: flex;
      gap: 20px;
      margin-top: 20px;
    }

    #muteButton {
      background-color: #f44336;
      color: white;
      border: none;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      cursor: pointer;
    }

    #muteButton.muted {
      background-color: #4CAF50;
    }

    </style>

</head>

<body>
    <div class="topnav">
        <a class="active" href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
        <a href="/dashboard">Dashboard</a>
    </div>
    <div class="content">
        <p style="margin-left: 15%; font-size: 200%;"><b>Welcome to</b></p>
        <h1 style="margin-left: 25%; font-size: 60px;">Sassychat Peer and Private Chatting Platform!!</h1>

    </div>


<body>
  <div class="sidenav">
    <a href="/home"><b>Home</b></a>
  </div>
  <h4>Video Call</h4>
  <div id="video-grid"></div>
  <div id="controls">
    <div>
      <label>
        <style>
          label2 {
            color: white;
          }
        </style>
        <label2>
          <input type="checkbox" id="video-toggle">
          Video on/off
        </label2>       
      </label>
    </div>
    <div>
      <button id="muteButton" onclick="toggleAudio()">Mute</button>
    </div>
  </div>
 <br>
  <p>Audio/Video input and output will be determined by system and browser.</p>
  <p>Selection within Browser is in development.</p>

  <script>
    const videoToggle = document.getElementById('video-toggle');
    const muteButton = document.getElementById('muteButton');

    videoToggle.addEventListener('change', () => {
      toggleVideo();
    });

    function toggleAudio() {
      const stream = localStream.getAudioTracks()[0];
      if (stream.enabled) {
        stream.enabled = false;
        muteButton.classList.add('muted');
      } else {
        stream.enabled = true;
        muteButton.classList.remove('muted');
      }
    }
  </script>


</body>

</html>