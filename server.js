/**
 * Express Web Server
 * Listening to port 3000
 */


//babel-node server.js is the command that should be run
'use strict';

import express from 'express';
import mongoose from 'mongoose';
import authApi from './BackEnd/controllers/authApi';
import getDbConnectionString from './BackEnd/configuration/getDbConnectionString'

var app = express(),
	port = process.env.PORT || 3000,
	APP_URL = '/App/',
	STATIC_FILES_URL = '/app/';

//Set port
app.listen(port);

//Set url for static file: css, js etc
app.use(STATIC_FILES_URL, express.static(__dirname + APP_URL));

//Db connection
mongoose.connect(getDbConnectionString());

//Index Routing
app.get('/', (req, res) => res.sendFile(__dirname + APP_URL + 'index.html'));

//Authentication Routing
authApi(app);