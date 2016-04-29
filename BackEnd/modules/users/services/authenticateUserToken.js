'use strict';

import jwt from 'jsonwebtoken'; //JSON Web Tokens
import config from '../../../configuration/config';

export default (res, req) => {
	// check header or url parameters or post parameters for token
	let token = req.body.token || req.query.token || req.headers['x-access-token'];
	if (token) { //if token exists
		jwt.verify(token, config.superSecret, (err) => {
			if (err) { //if token expired
				res.status(503).json({
					status: 'Service Unavailable'
				});
			} else { //if token is valid
				res.json({
					success: true
				});
			}
		});
	} else { //if token not found
		res.status(401).json({
			status: 'Unauthorized'
		});

	}
}