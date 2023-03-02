const botName = 'Chat Bot';

const io = require('socket.io')();

io.on('connection', socket => {
  socket.on('joinRoom', ({ username, room }) => {
    const user = userJoin(socket.id, username, room);
    socket.join(user.room);
    socket.emit('message', formatMessage(botName, 'Welcome to the Chat!'));
    socket.broadcast.to(user.room).emit('message', formatMessage(botName, `${user.username} has joined the chat`));
    io.to(user.room).emit('roomUsers', { room: user.room, users: getRoomUsers(user.room) });
  });
  socket.on('chatMessage', msg => {
    const user = getCurrentUser(socket.id);
    io.to(user.room).emit('message', formatMessage(user.username, msg));
  });
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);
    if (user) {
      io.to(user.room).emit('message', formatMessage(botName, `${user.username} has left the chat`));
      io.to(user.room).emit('roomUsers', { room: user.room, users: getRoomUsers(user.room) });
    }
  });
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId);
    socket.broadcast.emit('user-connected', userId);
    socket.on('disconnect', () => socket.broadcast.emit('user-disconnected', userId));
  });
});

module.exports = io;
