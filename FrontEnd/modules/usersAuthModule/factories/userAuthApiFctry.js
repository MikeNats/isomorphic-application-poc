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
	let api = (method, url, data) => {
		return $http({
			method: method,
			url: url,
			data: data
		});
	};

	return {
		signIn: ({ //Sends data to validate user
			userName,
			passWord
		}) => {
			return api('POST', USER_API_PATHS.SIGN_IN, {
				userName,
				passWord
			});
		},
		authUser: (token) => { //Use on the router before $state change, will send token for authentication
			return api('POST', USER_API_PATHS.AUTH, {
				token: token
			});
		},
		signUp: ({
			userName,
			email,
			passWord
		}) => {
			return api('POST', USER_API_PATHS.SIGN_UP, {
				userName,
				email,
				passWord
			});

		},
		isUserNameValid: (userName) => {
			return api('POST', USER_API_PATHS.IS_USER_NAME_VALID, {
				userName
			});
		}
	};
}]);