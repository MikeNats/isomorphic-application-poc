'use strict';

import express from 'express';
import morgan from 'morgan'; //Log's requests to the console
import bodyParser from 'body-parser'; //Get parameters from our POST requests

export default (app) => {
	/**
	 * @description Middle-Wear: Parse requests as json
	 */
	app.use(bodyParser.urlencoded({
		extended: false
	}));

	app.use(bodyParser.json());
	/**
	 * @description Middle-Wear: Log requests to the console
	 */
	app.use(morgan('dev'));

	/**
	 * @description Middle-Wear: Set root url for static files that are hard coded in the html files: .css, .js etc
	 */
	app.use('/app/', express.static('../App/'));
};