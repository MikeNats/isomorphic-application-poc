'use strict';

let $scope = {};

describe('logInPanelCtrl', () => {

	beforeEach(() => {
		angular.mock.module('usersAuthModule');

		inject((_$controller_) => {
			_$controller_('logInPanelCtrl', {
				$scope: $scope
			});
		});
	});

	describe('logInPanel', () => {

		describe('signInTab', () => {

			it('should be visible on initialization', () => {
				expect($scope.logInPanelModel.signInTab).toBe(true);
			});
		});

		describe('signUpTab', () => {

			it('sshould be INvisible on initialization', () => {
				expect($scope.logInPanelModel.signUpTab).toBe(false);
			});
		});

		describe('setActive', () => {

			it('should be function', () => {
				expect($scope.logInPanelModel.setActive).toEqual(jasmine.any(Function));
			});
			it('should set visible the sign-Up tab if sign-Up Tab is clicked', () => {
				$scope.logInPanelModel.setActive('signUpTab');

				expect($scope.logInPanelModel.signInTab).toBe(false);
				expect($scope.logInPanelModel.signUpTab).toBe(true);
			});
			it('should set visible the sign-In tab if sign-In Tab is clicked', () => {
				$scope.logInPanelModel.setActive('signInTab');

				expect($scope.logInPanelModel.signInTab).toBe(true);
				expect($scope.logInPanelModel.signUpTab).toBe(false);
			});
		});
	});
});