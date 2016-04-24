'use strict';

/**
 * @framework angular
 * @kind jsConcept
 * @type controller
 * @name signUpCtrl
 * @memberof module:usersModule
 * @Description User registration logic.
 * @requires $scope
 * @requires signUpApiFctry
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import usersModule from '../usersModule';

usersModule.controller('signUpCtrl', ['$scope', 'signUpApiFctry', ($scope, signUpApiFctry) => {
	$scope.signUp = {
		userName: '',
		email: '',
		passWord: '',
		passWordValidation: ''
	};
	$scope.submit = () => {
		signUpApiFctry($scope.signUp);
	}
}]);