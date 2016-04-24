/**
 * Express Web Server
 * Listening to port 3000 or server port
 * To start the server type in console `npm start`
 */

'use strict';

import express from 'express';
import mongoose from 'mongoose'; //Interact with our MongoDB database
import globalMiddlewares from './BackEnd/globalMiddlewares/globalMiddlewares';
import getDbConnectionUrl from './BackEnd/configuration/getDbConnectionUrl';
import userRouter from './BackEnd/modules/users/middlewares/userRouter';


const app = express(),
	port = process.env.PORT || 3000;

/**
 * @description Set port
 */
app.listen(port);

/**
 * @description Connect with database
 */
mongoose.connect(getDbConnectionUrl());

/**
 * @description Use global middle-wares
 */
globalMiddlewares(app);

/**
 * @description Router for index page
 */
app.get('/', (req, res) => res.sendFile(__dirname + '/App/index.html'));

/**
 * @description Authentication API for signIn, signUp
 */
userRouter(app);