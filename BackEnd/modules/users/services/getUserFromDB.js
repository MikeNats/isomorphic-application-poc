'use strict';

import User from '../../../schema/userModel';
import createTokken from './createToken';

export default (req, res) => {
	User.findOne({ //search if user exist in DB
		userName: req.body.userName,
		passWord: req.body.passWord
	}, (err, user) => {
		if (err) { //if DB connection error
			res.status(403).json({
				success: false,
				message: 'Error while accessing the DB'
			});
		} else if (user) { //if user  exists
			user.tokken = createTokken(user); //add token
			res.json(user); //return user
		} else { //if user exists
			res.status(403).json({
				success: false,
				message: 'Wrong user name or password'
			});
		}
	});
}