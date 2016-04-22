'use strict';

import AUTH_API from '../consts/AUTH_API';
import storeUserToDB from '../services/authServices/storeUserToDB';

export default (app) => {

	app.post(AUTH_API.SIGN_IN, (req, res) => {
		//checkIfUserExistInDB(req, res)
	});

	app.post(AUTH_API.SIGN_UP, (req, res) => {
		storeUserToDB(req, res);
	});
}