/**
 * Express Web Server
 * Listening to port 3000
 */

'use strict';

var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;

app.listen(port);

app.use('/app/', express.static(__dirname + '/FrontEnd/app/'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/FrontEnd/app/index.html');
});

app.get('/sign-in', function(req, res) {
	console.log(req, res);
});

module.exports = app;