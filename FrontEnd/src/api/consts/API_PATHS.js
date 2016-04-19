'use static';

/**
 * @framework angular
 * @kind jsConcept
 * @type constant
 * @name API_PATHS
 * @memberof module:apiModule
 * @Description Contains Api urls
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import apiModule from '../apiModule';

apiModule.constant('API_PATHS', {
	SIGN_IN: '/sign-in',
	SIGN_UP: '/sign-up',
});