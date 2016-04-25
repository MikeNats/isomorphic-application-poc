'use strict';


import dbCredentials from './config'

export default () => {
	return 'mongodb://' + dbCredentials.userName + ':' + dbCredentials.passWord + '@ds013931.mlab.com:13931/meand';
}