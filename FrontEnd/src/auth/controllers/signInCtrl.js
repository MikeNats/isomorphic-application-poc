/**
* @framework angular
* @kind jsConcept
* @type controller
* @name signInCtrl
* @memberof module:auth
* @Description User authentication logic
* @requires $scope
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.5.5
*/

'use strict';
angular.module('authModule', []).controller('signInCtrl', ['$scope', ($scope) => {
   	$scope.signIn = {
   		userName: '',
   		passWord: '',
   	};
}]);