/**
 * Express Web Server
 * Listening to port 3000 or server port
 * To start the server type in console `npm start`
 */

'use strict';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import authApi from './BackEnd/controllers/authApi';
import getDbConnectionUrl from './BackEnd/configuration/getDbConnectionUrl';

const app = express(),
	port = process.env.PORT || 3000;

/**
 * @description Set port
 */
app.listen(port);

/**
 * @description Middle-Wear: Parse requests as json
 */
app.use(bodyParser.json());

/**
 * @description Middle-Wear: Log requests to the console
 */
app.use(morgan('dev'));

/**
 * @description Middle-Wear: Set root url for static files that are hard coded in the html files: .css, .js etc
 */
app.use('/app/', express.static(__dirname + '/App/'));

/**
 * @description Connect with database
 */
mongoose.connect(getDbConnectionUrl());

/**
 * @description Router for index page
 */
app.get('/', (req, res) => res.sendFile(__dirname + '/App/index.html'));

/**
 * @description Authentication API for signIn, signUp
 */
authApi(app);