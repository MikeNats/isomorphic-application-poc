'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

var app = angular
	.module('app', [uiRouter, 'authModule', 'apiModule'])
	.config(['$stateProvider', '$urlRouterProvider',
		($stateProvider, $urlRouterProvider) => {
			/**
			 * @framework angular
			 * @kind jsConcept
			 * @type configuration
			 * @name config
			 * @memberof module:app
			 * @requires $stateProvide
			 * @requires $urlRouterProvider
			 * @Description Routing of the App
			 *
			 */

			$urlRouterProvider.otherwise('/index');

			// Home //
			$stateProvider.state('index', {
				url: '/index',
				views: {
					indexPage: {
						templateUrl: '/app/views/logIn/page-min.html'
					}
				},
				data: {
					requireLogin: false
				}
			});
			}]);

console.log('running!!!');