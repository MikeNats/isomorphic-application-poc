'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

var app = angular
	.module('app', [uiRouter, 'usersAuthModule'])
	.run(['$rootScope', '$state', '$stateParams', 'authenticateApiFctry', ($rootScope, $state, $stateParams, authenticateApiFctry) => {
		$rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
			if (toState.data.requireLogin) { //Authentication before page load
				authenticateApiFctry.error(() => {
					event.preventDefault();
					$state.go('index');
				});
			}
		});
	}])
	.config(['$stateProvider', '$urlRouterProvider',
		($stateProvider, $urlRouterProvider) => { //Router
			$stateProvider.state('index', { // Home
					url: '/index',
					views: {
						indexPage: {
							templateUrl: 'App/views/pages/logIn.html'
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
							templateUrl: 'App/views/pages/createEditProject.html',
						}
					},
					data: {
						requireLogin: true
					}
				});
			$urlRouterProvider.otherwise('/index'); //Default redirect
	}]);