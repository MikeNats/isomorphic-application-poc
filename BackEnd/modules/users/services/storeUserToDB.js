'use strict';


import User from '../../../schema/userModel';

let newUser = (req) => { //return new user Instance
	return new User({
		userName: req.body.userName,
		email: req.body.email,
		passWord: req.body.passWord,
		tokken: '',
		projects: []
	});
};

export default (req, res) => {
	newUser(req).save((err) => { //Store user
		if (err) { //if DB connection error
			res.status(403).json({
				success: false,
				message: 'Unable to reach DB'
			});
		}
	});
}