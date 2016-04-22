'use strict';

import storeUserToDB from './storeUserToDB';

export default (req, res) => { //search if user exist in DB
	User.find({email: req.body.email}, (err, docs) => {
		if (err) { //if DB error
			res.json({
				success: false
			});
		} else if (docs.length === 0) { //if user don't exist, store it
			storeUserToDB(req);
				res.json({
					success: true
				});
		} else { //if user exists save it
			res.json({
				success: false
			});
		}
	});
}