/* jasmine specs for controllers go here */

'use strict';

let $controller,
	$scope,
	controller;

describe('logInPanelCtrl', () => {
	beforeEach(() => {
		angular.mock.module('usersAuthModule');

		inject((_$controller_) => {
			$controller = _$controller_;
			$scope = {};
			controller = $controller('logInPanelCtrl', {
				$scope: $scope
			});
		});
	});

	it('should have attached logIn Object to its scope', () => {
		expect($scope.logInPanel).toEqual(jasmine.any(Object));
	});
	it('should have attached on logIn a method signInApiFctry', () => {
		expect($scope.logInPanel.setActive).toEqual(jasmine.any(Function));
	});
	it('should set visible the sign-In tap on initialization', () => {
		expect($scope.logInPanel.signIn).toBe(true);
	});
	it('should set inVisible the sign-Up tap on initialization', () => {
		expect($scope.logInPanel.signUp).toBe(false);
	});
	it('should set visible the sign-Up tap if sign-Up Tap is clicked', () => {
		$scope.logInPanel.setActive('signUp');

		expect($scope.logInPanel.signIn).toBe(false);
		expect($scope.logInPanel.signUp).toBe(true);
	});
	it('should set visible the sign-Up tap if sign-Up Tap is clicked', () => {
		$scope.logInPanel.setActive('signIn');

		expect($scope.logInPanel.signIn).toBe(true);
		expect($scope.logInPanel.signUp).toBe(false);
	});
});