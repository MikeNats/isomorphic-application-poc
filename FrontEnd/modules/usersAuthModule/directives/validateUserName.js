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

usersAuthModule.directive('validateUserName', ['userAuthApiFctry', (userAuthApiFctry) => {
	return {
		restrict: 'A',
		link: (scope, element, attrs) => {

			scope.$watch('signUpModel.userName', () => { //when user is typing in the reTypedPassWord input
				if (scope.signUpModel.userName === '') {
					scope.signUpModel.userNameError = false;
				} else {
					userAuthApiFctry.isUserNameValid(scope.signUpModel.userName).then(() => {
						scope.signUpModel.userNameError = false;
					}, () => {
						scope.signUpModel.userNameError = true;
					});

				}

			});

		}
	}
}]);