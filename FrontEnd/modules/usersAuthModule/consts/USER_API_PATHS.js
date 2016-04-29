'use static';

/**
 * @framework angular
 * @kind jsConcept
 * @type constant
 * @name API_PATHS
 * @memberof module:usersAuthModule
 * @Description Contains Api urls
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import usersAuthModule from '../usersAuthModule';

usersAuthModule.constant('USER_API_PATHS', {
	SIGN_IN: '/api/sign-in',
	SIGN_UP: '/api/sign-up',
	AUTH: 'api/auth'
});