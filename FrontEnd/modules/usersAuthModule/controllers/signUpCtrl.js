'use strict';

/**
 * @framework angular
 * @kind jsConcept
 * @type controller
 * @name signUpCtrl
 * @memberof module:usersAuthModule
 * @Description User registration logic.
 * @requires $scope
 * @requires signUpApiFctry
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import usersAuthModule from '../usersAuthModule';

usersAuthModule.controller('signUpCtrl', ['$scope', 'signUpApiFctry', ($scope, signUpApiFctry) => {
	$scope.signup = {
		userName: '',
		email: '',
		passWord: '',
		reTypedPassWord: ''
	};
	$scope.emailError = '';
	$scope.passWordError = '';

	$scope.submit = () => {
		console.log('____________');
		signUpApiFctry($scope.signup)
			.success(() => {
				$scope.signup.validEmail = false;
			}).error(() => {
				$scope.signup.validEmail = true;
			});
	};

}]);