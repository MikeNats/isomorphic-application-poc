/**
 * Express Web Server
 * Listening to port 3000
 */


//babel-node server.js is the command that should be run
'use strict';

import express from 'express';
import auth from './BackEnd/auth/auth';
	app = express(),
	port = process.env.PORT || 3000,
  FRONT_END_BASE_URL = '/FrontEnd/app/',
  STATIC_FILES_URL = '/app/';

app.listen(port);

app.use(STATIC_FILES_URL, express.static(__dirname + FRONT_END_BASE_URL));

app.get('/', function(req, res) {
	res.sendFile(__dirname + FRONT_END_BASE_URL +'index.html');
});

auth(app);