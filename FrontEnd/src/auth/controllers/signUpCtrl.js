'use strict';

/**
 * @framework angular
 * @kind jsConcept
 * @type controller
 * @name signUpCtrl
 * @memberof module:authModule
 * @Description User registration logic.
 * @requires $scope
 * @requires signUpApiFctry
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import authModule from '../authModule';

authModule.controller('signUpCtrl', ['$scope', 'signUpApiFctry', ($scope, signUpApiFctry) => {
	$scope.credentials = {
		userName: '',
		email: '',
		passWord: '',
		passWord2: ''
	};
	$scope.submit = () => {
		signUpApiFctry($scope.credentials);
	}
}]);