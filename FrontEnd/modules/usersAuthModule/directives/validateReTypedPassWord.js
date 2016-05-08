'use static';

/**
 * @framework angular
 * @kind jsConcept
 * @type directive
 * @name validateReTypedPassWord
 * @memberof module:usersAuthModule
 * @description Validates the re typed password
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import usersAuthModule from '../usersAuthModule';

usersAuthModule.directive('validateReTypedPassWord', () => {
	return {
		restrict: 'A',
		link: (scope, element, attrs) => {
			scope.$watch('signUpModel.reTypedPassWord', () => { //when user is typing in the reTypedPassWord input
				if (scope.signUpModel.reTypedPassWord !== attrs.password) { //attrs.password is populated by the password value. If attr value is different with reTypedPassWord value
					scope.signUpModel.reTypedPassWordError = true; // set ng-class error active
				} else {
					scope.signUpModel.reTypedPassWordError = false; // set ng-class error inactive
				}
			});

		}
	}
});