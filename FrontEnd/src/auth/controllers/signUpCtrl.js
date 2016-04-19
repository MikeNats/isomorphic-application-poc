/**
* @framework angular
* @kind jsConcept
* @type controller
* @name signUpCtrl
* @memberof module:auth
* @Description User registration logic.
* @requires $scope
* @author Michail Tsougkranis
* @version 1.0
* @since Angular 1.5.5
*/

'use strict';

angular.module('authModule', []).controller('signUpCtrl', ['$scope', ($scope) => {
   	$scope.signUp = {
   		userName: '',
   		passWord1: '',
   		passWord2: ''
   	};
}]);
