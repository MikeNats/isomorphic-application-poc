'use static';

/**
 * @framework angular
 * @kind jsConcept
 * @type factory
 * @name signIn
 * @memberof module:usersAuthModule
 * @description Sign In Api.
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import usersAuthModule from '../usersAuthModule';

usersAuthModule.factory('signInApiFctry', ['$http', '$window', '$location', 'USER_API_PATHS', ($http, $window, $location, USER_API_PATHS) => {
	return {
		signIn: (url, {
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
				$window.sessionStorage.token = serverResponse.token;
				$location.path(url);
			}).error((serverResponse, status, headers, config) => {

			});
		}
	};
}]);