'use static';

/**
 * @framework angular
 * @kind jsConcept
 * @type factory
 * @name signIn
 * @memberof module:authModule
 * @description Sign Up Api.
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import authModule from '../authModule';

authModule.factory('signUpApiFctry', ['$http', 'API_PATHS', ($http, API_PATHS) => {
	return ({
		userName,
		email,
		passWord
	}) => {
		return $http({
			method: 'POST',
			url: API_PATHS.SIGN_UP,
			data: {
				userName,
				email,
				passWord
			}
		}).success((serverResponse, status, headers, config) => {
			console.log(serverResponse, status, headers, config);
		}).error((serverResponse, status, headers, config) => {

		});
	};
}]);