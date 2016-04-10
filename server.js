/**
 * Express Web Server
 * Listening to port 3000
 */

'use strict';
var app = require('express')(),
	port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});



app.listen(port);