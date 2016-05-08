'use strict';

/**
 * @framework angular
 * @kind jsConcept
 * @type controller
 * @name signUpCtrl
 * @memberof module:usersAuthModule
 * @Description Sign up: User registration,.
 * @requires $scope
 * @requires $scope
 * @requires signUpApiFctry
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import usersAuthModule from '../usersAuthModule';

usersAuthModule.controller('signUpCtrl', ['$scope', '$window', '$location', 'userAuthApiFctry', ($scope, $window, $location, userAuthApiFctry) => {
	let signUpSuccess = (serverResponse) => {
			removeErrors();
			$window.sessionStorage.token = serverResponse.data.token;
			$location.path('/createEditProject');
		},
		signUpFailed = (serverResponse) => {
			removeErrors();
			serverResponse.data.wrongFields.forEach((wrongField) => {
				$scope.signUpModel[wrongField] = true;
			});
		},
		removeErrors = () => {
			$scope.signUpModel['userNameError'] = false;
			$scope.signUpModel['emailError'] = false;
		};

	$scope.signUpModel = {
		userName: '',
		email: '',
		passWord: '',
		reTypedPassWord: '',
		userNameError: false,
		emailError: false,
		passWordError: false,
		reTypedPassWordError: false
	};

	$scope.submit = () => { //sign up user
		userAuthApiFctry.signUp($scope.signUpModel) //On success will redirect to given path
			.then((serverResponse) => { //If success set error to false
				signUpSuccess(serverResponse);
			}, (serverResponse) => { //If fail api will provide an array string with the fields that were wrong, and these fields will have the ng-class error active
				signUpFailed(serverResponse);
			});
	};
}]);