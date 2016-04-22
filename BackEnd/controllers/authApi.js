'use strict';

import AUTH_API from '../consts/AUTH_API';
import signIn from '../services/authServices/signIn';
import signUp from '../services/authServices/signUp';

export default (app) => {
	app.post(AUTH_API.SIGN_IN, (req, res) => {
		signIn(req, res);
	});

	app.post(AUTH_API.SIGN_UP, (req, res) => {
		signUp(req, res);
	});
}