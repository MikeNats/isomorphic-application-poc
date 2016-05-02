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
	$scope.signUpModel = {
		userName: '',
		email: '',
		passWord: '',
		reTypedPassWord: '',
		userNameError: false,
		emailError: false,
		passWordError: false
	};

	$scope.submit = () => {
		signUpApiFctry.signUp('/createEditProject', $scope.signUpModel)
			.then(() => {
				$scope.signUpModel['userNameError'] = false;
				$scope.signUpModel['emailError'] = false;
			}, (repsonse) => {
				repsonse.data.wrongFields.forEach((wrongField) => {
					$scope.signUpModel[wrongField] = true;
				});
			});
	};
}]);