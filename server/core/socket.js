module.exports = {
	io: null,
	bind: function (server) {
		this.io = require('socket.io')(server);

		this.io.on('connection', (socket) => {
			//console.log('Welcome to server chat');
			socket.on('send', function (data) {
				this.io.sockets.emit('send', data);
			});
		});
	}
};