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

usersAuthModule.controller('logInPanelCtrl', ['$scope', ($scope) => {
	$scope.logInPanel = {
		setActive: (panel) => {
			$scope.logInPanel.signIn = false;
			$scope.logInPanel.signUp = false;
			$scope.logInPanel[panel] = true;
		},
		signIn: true,
		signUp: false
	};

}]);