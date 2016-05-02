'use strict';

/**
 * @framework angular
 * @kind jsConcept
 * @type controller
 * @name logInPanelCtrl
 * @memberof module:usersAuthModule
 * @Description Tab toggler
 * @requires $scope
 * @requires signInApiFctry
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import usersAuthModule from '../usersAuthModule';

usersAuthModule.controller('logInPanelCtrl', ['$scope', ($scope) => {
	$scope.logInPanelModel = {
		setActive: (tab) => {
			$scope.logInPanelModel.signInTab = false;
			$scope.logInPanelModel.signUpTab = false;
			$scope.logInPanelModel[tab] = true;
		},
		signInTab: true,
		signUpTab: false
	};
}]);