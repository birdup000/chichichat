<html lang="en">

<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.0/jquery.min.js"></script>
    <title>Home</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="bees.png" type="image/x-icon">
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
    </style>

</head>


<script>
  function process() {
    const url = "https://sassychat.me/" + document.getElementById("url").value;
    location.href = url;
    return false;
  }
</script>

<body>
  <div class="topnav">
    <a href="/home">Home</a>
    <a href="/contact">Contact</a>
    <a href="/about">About</a>
    <a class="active" href="/dashboard">Dashboard</a>
  </div>

  <p style="background-color: lightslategray; border-radius: 15px;">
    <b>Welcome to the dashboard page this is where you can start/join your video and text chats!</b>
  </p>
  <p>Text chat isn't peer based yet. Still in development right now</p>

  <div class="buttong">
    <form method="get" action="https://sassychat.me/chat">
      <button
        type="submit"
        style="
          background-color: yellowgreen;
          padding: 2px;
          font-weight: bolder;
          color: black;
          border-radius: 10px;
        "
      >
        Text Chat
      </button>
    </form>
  </div>

  <p style="background-color: purple; border-radius: 15px;">
    I am excited to announce that Mobile and Desktop are fully working for Video Calling and Text Chatting in the browser. If you are on PC please connect your camera and microphone first before joining/create the video calls
  </p>
  <p>To join rooms enter the code from the top url and then press the go button.</p>
  <img src="Join.png" alt="Joinpic" />

  <form on:submit|preventDefault={process}>
    <input type="text" name="url" id="url" placeholder="Room Code" required />
    <input type="submit" value="go" />
  </form>

  <p>Hit this video chat button to create a new call room.</p>

  <h2 style="color: azure;">Cloud Host Test</h2>

  <div class="buttong">
    <form method="get" action="https://sassychat.me/videochat">
      <button
        type="submit"
        style="
          background-color: yellowgreen;
          padding: 2px;
          font-weight: bolder;
          color: black;
          border-radius: 10px;
        "
      >
        Video Chat
      </button>
    </form>
  </div>

  <p style="background-color: orangered; border-radius: 15px;">
    Audio Chat Coming soon!! Still in development
  </p>
     <hr style="height: 5px; background-color: #333; border: none;">


      <h2 style="color: azure;">Local Host Test</h2>
      div class="buttong">


<form method="get" action="http://localhost/videochat"><button type="submit" style="background-color: yellowgreen; padding: 2px; font-weight: bolder; color:black;border-radius: 10px;">Video Chat</button></form>

    <p style="background-color: orangered;border-radius: 15px;">Audio Chat Coming soon!! Still in development</p>
    <form method="get" action="http://localhost/audiochat"><button type="submit" style="background-color: red; padding:2px; font-weight:bolder; color:black;border-radius: 10px;">Audio Chat</button></form>

</html>