'use strict';

var angular = require('angular'),
	app = angular
			.module('app', ['authModule', require('angular-ui-router')])
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
						indexPage: { templateUrl: '/lib/views/logIn/page-min.html' }
					},
					data : {
						requireLogin : false
					}
		        });
			}]);

console.log('running!!!');