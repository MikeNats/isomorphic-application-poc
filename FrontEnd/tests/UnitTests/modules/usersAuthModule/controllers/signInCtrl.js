'use strict';

let $scope,
	$deferred,
	$window;

describe('signInCtrl', () => {

	beforeEach(() => {
		angular.mock.module('usersAuthModule');

		inject((_$rootScope_, _$controller_, _userAuthApiFctry_, _$q_, _$window_) => {
			$scope = _$rootScope_.$new(); // Gets the rootScope_ with .apply
			$window = _$window_; //Get global window
			$deferred = _$q_.defer(); // To create a mock instance of defer
			spyOn(_userAuthApiFctry_, 'signIn').and.returnValue($deferred.promise); // Jasmine Spy to return the $deferred promise
			_$controller_('signInCtrl', {
				$scope: $scope,
				userAuthApiFctry: _userAuthApiFctry_
			});
		});
	});

	describe('signInModel', () => {

		it('should been attached on the scope', () => {
			expect($scope.signInModel).toEqual(jasmine.any(Object));
		});
		it('should have attribute userName set to empty string', () => {
			expect($scope.signInModel.userName).toEqual('');
		});
		it('should have attribute error set to false', () => {
			expect($scope.signInModel.error).toEqual(false);
		});
	});

	describe('submit', () => {

		it('should been attached on the scope', () => {
			expect($scope.submit).toEqual(jasmine.any(Function));
		});
		it('should set $scope.signInModel.error to false on success ', () => {
			$deferred.resolve({
				data: {
					token: 'validTokken'
				}
			});
			$scope.submit();
			$scope.$apply();

			expect($scope.signInModel.error).toEqual(false);
		});
		it('should set $window.sessionStorage.token on success ', () => {
			$deferred.resolve({
				data: {
					token: 'validTokken'
				}
			});
			$scope.submit();
			$scope.$apply();

			expect($window.sessionStorage.token.length === 'token').toEqual(false);
		});
		it('should set $scope.signInModel.error to true on error ', () => {
			$deferred.reject();
			$scope.submit();
			$scope.$apply();

			expect($scope.signInModel.error).toEqual(true);
		});
	});
});