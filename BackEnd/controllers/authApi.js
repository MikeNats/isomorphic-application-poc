'use strict';

import AUTH_API from '../consts/AUTH_API';

export default (app) => {
	app.get(AUTH_API.SIGN_IN, function(req, res) {
		console.log(req);
	});

	app.get(AUTH_API.SIGN_UP, function(req, res) {
		console.log(req);
	});
}