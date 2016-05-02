'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

var app = angular
	.module('app', [uiRouter, 'usersAuthModule'])
	.run(['$rootScope', '$state', '$stateParams', '$window', '$location', 'userAuthApiFctry', ($rootScope, $state, $stateParams, $window, $location, userAuthApiFctry) => {
		$rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
			if (toState.data.requireLogin) { //If page need authentication
				userAuthApiFctry.authUser($window.sessionStorage.token)
					.error(() => {
						$location.path('/index'); //redirect to index page
					}); //Authenticate User
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