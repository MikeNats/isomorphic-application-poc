'use static';

/**
 * @framework angular
 * @kind jsConcept
 * @type factory
 * @name authenticateApiFctry
 * @memberof module:usersAuthModule
 * @description User authentication.
 * @requires  $http
 * @requires  USER_API_PATHS
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import usersAuthModule from '../usersAuthModule';

usersAuthModule.factory('userAuthApiFctry', ['$http', 'USER_API_PATHS', ($http, USER_API_PATHS) => {
	return {
		signIn: ({
			userName,
			passWord
		}) => {

			return $http({
				method: 'POST',
				url: USER_API_PATHS.SIGN_IN,
				data: { //Sends data to validate user
					userName,
					passWord
				}
			});
		},
		authUser: (token) => { //Use on the router before $state change
			return $http({
				method: 'POST',
				url: USER_API_PATHS.AUTH,
				data: {
					token: token //will send token for authentication
				}
			});
		},
		signUp: ({
			userName,
			email,
			passWord
		}) => {

			return $http({
				method: 'POST',
				url: USER_API_PATHS.SIGN_UP,
				data: {
					userName,
					email,
					passWord
				}
			});
		}
	};
}]);