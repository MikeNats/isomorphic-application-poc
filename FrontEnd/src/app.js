'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

var app = angular
	.module('app', [uiRouter, 'usersModule'])
	//.run(['$rootScope', '$state', '$stateParams', 'authenticateApiFctry',
	//($rootScope, $state, $stateParams, authenticateApiFctry) => {
	/** Authentication  before page load **/
	// $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
	// 	if (!toState.data.requireLogin) {
	// 		event.preventDefault();
	// 		//	$state.go('index');
	// 	}
	// });
	//	}])
	.config(['$stateProvider', '$urlRouterProvider',
		($stateProvider, $urlRouterProvider) => { //Router
			$stateProvider.state('index', { // Home
					url: '/index',
					views: {
						indexPage: {
							templateUrl: '/app/views/logIn/page.html',
						}
					},
					data: {
						requireLogin: false
					}
				})
				.state('createEditProject', { // Create Edit project
					url: '/createEditProject',
					views: {
						createEditProject: {
							templateUrl: '/app/views/createEdit/page.html',
						}
					},
					data: {
						requireLogin: true
					}
				});
			$urlRouterProvider.otherwise('/index'); //Default redirect
	}]);

console.log('running!!!');