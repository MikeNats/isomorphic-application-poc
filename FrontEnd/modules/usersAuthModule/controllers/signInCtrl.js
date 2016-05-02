'use strict';

/**
 * @framework angular
 * @kind jsConcept
 * @type controller
 * @name signInCtrl
 * @memberof module:usersAuthModule
 * @Description Sign in
 * @requires $scope
 * @requires signInApiFctry
 * @requires  $location
 * @requires $window
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import usersAuthModule from '../usersAuthModule';

usersAuthModule.controller('signInCtrl', ['$scope', 'userAuthApiFctry', '$location', '$window', ($scope, userAuthApiFctry, $location, $window) => {
	let signInSuccess = (serverResponse) => {
			$scope.signInModel.error = false;
			$window.sessionStorage.token = serverResponse.data.token; // set's a new token to session storage
			$location.path('/createEditProject'); //redirects to given url
		},
		signInFailed = () => {
			$scope.signInModel.error = true;
		};

	$scope.signInModel = {
		userName: '',
		passWord: '',
		error: false //if sign in fails error is set to true and error ng-class is added
	};

	$scope.submit = () => { // sign in user
		userAuthApiFctry.signIn($scope.signInModel) //if success will redirect to given path
			.then((serverResponse) => { //If success set error to false
				signInSuccess(serverResponse);
			}, () => { //If fails set error to true
				signInFailed();
			});
	}
}]);