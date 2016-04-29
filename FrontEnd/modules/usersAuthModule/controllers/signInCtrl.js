'use strict';

/**
 * @framework angular
 * @kind jsConcept
 * @type controller
 * @name signInCtrl
 * @memberof module:usersAuthModule
 * @Description User authentication logic
 * @requires $scope
 * @requires signInApiFctry
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import usersAuthModule from '../usersAuthModule';

usersAuthModule.controller('signInCtrl', ['$scope', 'signInApiFctry', ($scope, signInApiFctry) => {
	$scope.signIn = {
		userName: '',
		passWord: '',
		error: false
	};
	$scope.submit = () => {
		signInApiFctry($scope.signIn)
			.success(() => {
				$scope.signIn.error = false;
			})
			.error((response) => {
				$scope.signIn.error = true;
			});
	}
}]);