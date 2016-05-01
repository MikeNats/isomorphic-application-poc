'use static';

/**
 * @framework angular
 * @kind jsConcept
 * @type factory
 * @name signIn
 * @memberof module:usersAuthModule
 * @description Sign Up Api.
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import usersAuthModule from '../usersAuthModule';

usersAuthModule.directive('validateReTypedPassWord', () => {
	return {
		restrict: 'A',
		link: (scope, element, attrs) => {
			scope.$watch('signup.reTypedPassWord', () => {
				if (scope.signup.reTypedPassWord !== attrs.password) {
					scope.passWordError = true;
				} else {
					scope.passWordError = false;
				}
			});
		}
	}
});