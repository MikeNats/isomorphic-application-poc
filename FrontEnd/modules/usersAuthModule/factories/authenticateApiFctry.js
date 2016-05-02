'use static';

/**
 * @framework angular
 * @kind jsConcept
 * @type factory
 * @name signIn
 * @memberof module:usersAuthModule
 * @description User authentication.
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import usersAuthModule from '../usersAuthModule';

//Usage on the router before state change
usersAuthModule.factory('authenticateApiFctry', ['$http', '$window', '$location', 'USER_API_PATHS', ($http, $window, $location, USER_API_PATHS) => {
	return {
		user: () => {
			return $http({
				method: 'POST',
				url: USER_API_PATHS.AUTH,
				data: {
					token: $window.sessionStorage.token
				}
			}).then((userData, status, headers, config) => {
				//do nothing
			}, (serverResponse, status, headers, config) => {
				$location.path('/index'); //redirect to index page
			});
		}
	};
}]);