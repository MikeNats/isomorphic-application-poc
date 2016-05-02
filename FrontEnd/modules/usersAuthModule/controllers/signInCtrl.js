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

usersAuthModule.controller('signInCtrl', ['$scope', 'signInApiFctry', function signInCtrl($scope, signInApiFctry) {
	$scope.signInModel = {
		userName: '',
		passWord: '',
		error: false
	};
	$scope.submit = () => {
		signInApiFctry.signIn('/createEditProject', $scope.signInModel)
			.then(() => {
				$scope.signInModel.error = false;
			}, () => {
				$scope.signInModel.error = true;
			});
	}
}]);