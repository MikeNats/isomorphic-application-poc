'use static';

/**
 * @framework angular
 * @kind jsConcept
 * @type factory
 * @name signIn
 * @memberof module:usersModule
 * @description Sign In Api.
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import usersModule from '../usersModule';

usersModule.factory('signInApiFctry', ['$http', 'USER_API_PATHS', ($http, USER_API_PATHS) => {
	return ({
		userName,
		passWord
	}) => {
		return $http({
			method: 'POST',
			url: USER_API_PATHS.SIGN_IN,
			data: {
				userName,
				passWord
			}
		}).success((serverResponse, status, headers, config) => {

		}).error((serverResponse, status, headers, config) => {

		});
	};
}]);