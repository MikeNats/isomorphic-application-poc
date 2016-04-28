'use static';

/**
 * @framework angular
 * @kind jsConcept
 * @type factory
 * @name signIn
 * @memberof module:usersModule
 * @description User authentication.
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import usersModule from '../usersModule';

usersModule.factory('authenticateApiFctry', ['$http', '$window', 'USER_API_PATHS', ($http, $window, USER_API_PATHS) => {
	return $http({
		method: 'POST',
		url: USER_API_PATHS.AUTH,
		data: {
			token: $window.sessionStorage.token
		}
	}).success((userData, status, headers, config) => {
		//return true;
	}).error((serverResponse, status, headers, config) => {
		//return false;
	});
}]);