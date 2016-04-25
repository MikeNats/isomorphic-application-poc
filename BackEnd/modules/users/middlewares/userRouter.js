'use strict';


import userApi from '../controllers/userApi';

export default (app) => {
	/**
	 * @description Middle-Wear: Parse requests as json
	 */

	app.use('/api', userApi); //Makes available userApi to the app by Url composition: adds `/api` as prefix in  the url
};