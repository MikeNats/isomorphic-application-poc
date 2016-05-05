'use static';

/**
 * @framework angular
 * @kind jsConcept
 * @type directive
 * @name validatedPassWord
 * @memberof module:usersAuthModule
 * @description Validates the re typed password
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import usersAuthModule from '../usersAuthModule';

usersAuthModule.directive('validatePassWord', () => {
	let passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/; //1 Special Character, 1 Digit, 8 Characters

	return {
		restrict: 'A',
		link: (scope, element, attrs) => {

			scope.$watch('signUpModel.passWord', () => { //when user is typing in the reTypedPassWord input
				if (scope.signUpModel.passWord === '') {
					scope.signUpModel.passWordError = false;
				} else if (passRegex.test(scope.signUpModel.passWord)) {
					scope.signUpModel.passWordError = false;
				} else {
					scope.signUpModel.passWordError = true;
				}

			});

		}
	}
});