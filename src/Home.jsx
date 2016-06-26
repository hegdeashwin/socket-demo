'use strict';

import React from 'react';
import io from 'socket.io-client';

let socket = io.connect('http://localhost:8000', {
	'reconnectionAttempts': 3
});

socket.on('connect', function() {

	socket.on('isConfReady', function(res) {
		if (res.isReady) {
			socket.emit('pushConf', {
				'client': {
					'userAgent': navigator.userAgent,
				}
			});
		}
	});

  socket.on('acknowledge', function(res) {
    console.log(res);
  });

});

socket.on('disconnect', function() {
	console.info(' Info: Server got disconnected');
	process.exit(0);
});

socket.on('connect_error', function() {
	console.error(' Info: Connection error, server got disconnected');
});


class Home extends React.Component {
  render() {
    return (
      <h1>Home View Component</h1>
    );
  }
};

export default Home;
