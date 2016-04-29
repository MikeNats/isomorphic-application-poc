'use strict';

import storeUserToDB from './storeUserToDB';
import User from '../../../schema/userModel';
import getUserFromDB from './getUserFromDB';

export default (req, res) => {
	User.findOne({ //search if user exist in DB
		email: req.body.email
	}, (err, user) => {
		if (err) { //if DB connection error
			res.status(503).json({
				status: 'Service Unavailable'
			});
		} else if (!user) { //if user don't exist
			storeUserToDB(req, res); //store it
			getUserFromDB(req, res); //return it in the front end
		} else { //if user exists save it
			res.status(401).json({
				status: 'Unauthorized'
			});
		}
	});
}