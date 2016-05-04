'use strict';

import User from '../../../schema/userModel';

export default (req, res) => {
	User.findOne({ //search if user exist in DB
		'userName': req.body.userName
	}, (err, user) => {
		if (err) { //if DB connection error
			res.status(503).json({
				status: 'Service Unavailable'
			});
		} else if (!user) { //User name not found, user name is valid
			res.status(200).json({
				status: 'Success'
			});
		} else { //User name  found, user name is NOT valid
			res.status(401).json({
				status: 'Unauthorized'
			});
		}
	});
}