'use strict';

/**
 * @framework angular
 * @kind jsConcept
 * @type controller
 * @name logInCtrl
 * @memberof module:usersAuthModule
 * @Description User authentication logic
 * @requires $scope
 * @requires signInApiFctry
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import usersAuthModule from '../usersAuthModule';

usersAuthModule.controller('logInCtrl', ['$scope', ($scope) => {
	$scope.logIn = {
		setActive: (panel) => {
			$scope.logIn.signIn = false;
			$scope.logIn.signUp = false;
			$scope.logIn[panel] = true;
		},
		signIn: true,
		signUp: false
	};
}]);