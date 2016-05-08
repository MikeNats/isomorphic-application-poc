'use strict';

import dbCredentials from './config'

export default () => {
	let credentials = 'mongodb://' + dbCredentials.userName + ':' + dbCredentials.passWord;

	return {
		prodaction: credentials + '@ds013931.mlab.com:13931/meand',
		test: credentials + '@ds013192.mlab.com:13192/test-db'
	}
}