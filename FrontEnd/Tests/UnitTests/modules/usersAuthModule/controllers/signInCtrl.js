'use strict';

let $scope,
	$deferred;

describe('signInCtrl', () => {
	beforeEach(() => {
		angular.mock.module('usersAuthModule');

		inject((_$rootScope_, _$controller_, _signInApiFctry_, _$q_) => {
			$scope = _$rootScope_.$new(); // Gets the rootScope_ with .apply
			$deferred = _$q_.defer(); // To create a mock instance of defer
			spyOn(_signInApiFctry_, 'signIn').and.returnValue($deferred.promise); // Jasmine Spy to return the $deferred promise
			_$controller_('signInCtrl', {
				$scope: $scope,
				signInApiFctry: _signInApiFctry_
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
		it('on success should set $scope.signInModel.error to false', () => {
			$deferred.resolve();
			$scope.submit();
			$scope.$apply();

			expect($scope.signInModel.error).toEqual(false);
		});
		it('on error should set $scope.signInModel.error to true', () => {
			$deferred.reject();
			$scope.submit();
			$scope.$apply();

			expect($scope.signInModel.error).toEqual(true);
		});
	});
});