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
	$scope.signUp = {
		userName: '',
		email: '',
		passWord: '',
		passWordValidation: ''
	};
	$scope.validationError = {
		userName: false,
		email: false,
		password: false
	};
	$scope.submit = () => {
		signUpApiFctry($scope.signUp)
			.success(() => {

			}).error(() => {
				$scope.validationError.email = true;
			});
	};
}]);