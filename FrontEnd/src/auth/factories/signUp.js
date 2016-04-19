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
import API_PATHS from '../../api/consts/API_PATHS';

authModule.factory('signUpApiFctry', ['$http', 'API_PATHS', ($http, API_PATHS) => {
	return (userName, passWord) => {
		return $http({
			method: 'POST',
			url: API_PATHS.SIGN_UP,
			data: {
				userName,
				passWord
			}
		}).success((serverResponse, status, headers, config) => {

		}).error((serverResponse, status, headers, config) => {

		});
	};
}]);