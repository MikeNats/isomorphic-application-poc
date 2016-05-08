'use strict';

export default (req, user) => {
	let wrongFields = [];

	if (req.body.userName === user.userName) {
		wrongFields.push('userNameError');
	}
	if (req.body.email === user.email) {
		wrongFields.push('emailError');
	}

	return wrongFields;
}