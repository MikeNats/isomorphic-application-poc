'use strict';

/**
 * @framework angular
 * @kind jsConcept
 * @type controller
 * @name signInCtrl
 * @memberof module:authModule
 * @Description User authentication logic
 * @requires $scope
 * @requires signInApiFctry
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import authModule from '../authModule';

authModule.controller('signInCtrl', ['$scope', 'signInApiFctry', ($scope, signInApiFctry) => {
	$scope.signIn = {
		userName: '',
		passWord: '',
	};
	$scope.submit = () => {
		signInApiFctry($scope.signIn.userName, $scope.signIn.passWord);
	}
}]);