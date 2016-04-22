'use strict';

import User from '../../schema/userModel';

let newUser = (req) => { //return new user
	return new User({
		userName: req.body.userName,
		email: req.body.email,
		passWord: req.body.passWord,
		projects: []
	});
}

export default (req, res) => { //serach if user exist in DB
	User.find({
		email: req.body.email
	}, (err, docs) => {
		if (err) { //if DB error
			res.json({
				success: false
			});
		} else if (docs.length === 0) { //if user don't exist, store it
			newUser(req).save((err) => { // Store user
				if (err) { //if DB error while saving to DB
					throw err;
				}
				res.json({
					userExist: false
				});
			});
		} else { //if user exists save it
			res.json({
				userExist: true
			});
		}
	});
}