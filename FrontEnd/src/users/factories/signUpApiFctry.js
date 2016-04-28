'use static';

/**
 * @framework angular
 * @kind jsConcept
 * @type factory
 * @name signIn
 * @memberof module:usersModule
 * @description Sign Up Api.
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import usersModule from '../usersModule';

usersModule.factory('signUpApiFctry', ['$http', 'USER_API_PATHS', '$window', '$location', ($http, $window, $location, USER_API_PATHS) => {
	return ({
		userName,
		email,
		passWord
	}) => {
		console.log(userName,
			email,
			passWord);
		return $http({
			method: 'POST',
			url: USER_API_PATHS.SIGN_UP,
			data: {
				userName,
				email,
				passWord
			}
		}).success((userData, status, headers, config) => {
			$window.sessionStorage.token = userData.token;
			console.log('heloo');
			$location.path('/createEditProject');
		}).error((serverResponse, status, headers, config) => {

		});
	};
}]);