
<script>
  import { io } from '..//api/socketio.js';

  // Connect to the socket.io server
  io.on('connect', () => {
    console.log('Connected to server');
  });
</script>

<!-- The rest of the component -->


<html lang="en">

<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.0/jquery.min.js"></script>
    <title>chat</title>
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



    <div class="chat-container">
      <header class="chat-header">
       
        <a id="leave-btn" class="btn">Leave Room</a>
      </header>
      <main class="chat-main">
        <div class="chat-sidebar">
          <h3><i class="fas fa-comments"></i> Room Name:</h3>
          <h2 id="room-name"></h2>
          <h3><i class="fas fa-users"></i> Users</h3>
          <ul id="users"></ul>
        </div>
        <div class="chat-messages"></div>
      </main>
      <div class="chat-form-container">
        <form id="chat-form">
          <input
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            autocomplete="off"
          />
          <button class="btn"><i class="fas fa-paper-plane"></i> Send</button>
        </form>
      </div>
    </div>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/qs/6.9.2/qs.min.js"
      integrity="sha256-TDxXjkAUay70ae/QJBEpGKkpVslXaHHayklIVglFRT4="
      crossorigin="anonymous"
    ></script>
    <script src="/socket.io/socket.io.js"></script>
    <script src="main.js"></script>

</body>

</html>