'use strict';

import storeUserToDB from './storeUserToDB';
import User from '../../../schema/userModel';
import getUserFromDB from './getUserFromDB';

export default (req, res) => {
	console.log('>>>>>', req.body);
	User.findOne({ //search if user exist in DB
		email: req.body.email
	}, (err, user) => {

		if (err) { //if DB connection error
			res.status(403).json({
				success: false,
				message: 'Error while accessing the DB'
			});
		} else if (!user) { //if user don't exist
			storeUserToDB(req, res); //store it
			getUserFromDB(req, res); //return it in the front end
		} else { //if user exists save it
			res.json({
				success: false,
				message: 'User exists'
			});
		}
	});
}