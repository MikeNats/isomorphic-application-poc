'use strict';

import jwt from 'jsonwebtoken'; //JSON Web Tokens
import config from '../../../configuration/config';

export default (user) => {
	return jwt.sign(user, config.superSecret, { //returns a new token
		expiresIn: '1h' // expires in 20 minuites
	});
}