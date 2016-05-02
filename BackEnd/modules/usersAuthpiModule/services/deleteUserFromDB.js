'use strict';

import User from '../../../schema/userModel';

export default (req, res) => {

	User.findOne({ //search if user exist in DB
		email: req.body.email
	}, (err, user) => {
		if (err) { //if DB connection error
			res.status(503).json({
				status: 'Service Unavailable'
			});
		} else if (user) { //if user  exists
			User.remove({ //Delete user
				email: req.body.email
			}, (err) => {
				res.status(200).json({
					status: 'User Deleted'
				});
			})
		} else { //if user exists
			res.status(401).json({
				status: 'Unauthorized'
			});
		}
	});
}