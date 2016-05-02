'use strict';

let $scope,
	$deferred;

describe('signUpCtrl', () => {
	beforeEach(() => {
		angular.mock.module('usersAuthModule');

		inject((_$rootScope_, _$controller_, _signUpApiFctry_, _$q_) => {
			$scope = _$rootScope_.$new(); // Gets the rootScope_ with .apply
			$deferred = _$q_.defer(); // To create a mock instance of defer
			spyOn(_signUpApiFctry_, 'signUp').and.returnValue($deferred.promise); // Jasmine Spy to return the $deferred promise
			_$controller_('signUpCtrl', {
				$scope: $scope,
				signUpApiFctry: _signUpApiFctry_
			});
		});
	});

	describe('signUpModel', () => {

		it('should been attached on the scope', () => {
			expect($scope.signUpModel).toEqual(jasmine.any(Object));
		});
		it('should have attribute userName set to empty string', () => {
			expect($scope.signUpModel.userName).toEqual('');
		});
		it('should have attribute email set to empty string', () => {
			expect($scope.signUpModel.email).toEqual('');
		});
		it('should have attribute passWord set to empty string', () => {
			expect($scope.signUpModel.passWord).toEqual('');
		});
		it('should have attribute reTypedPassWord set to empty string', () => {
			expect($scope.signUpModel.reTypedPassWord).toEqual('');
		});
		it('should have attribute emailError set to false', () => {
			expect($scope.signUpModel.emailError).toEqual(false);
		});
		it('should have attribute passWordError set to false', () => {
			expect($scope.signUpModel.passWordError).toEqual(false);
		});
	});

	describe('submit', () => {

		it('should been attached on the scope', () => {
			expect($scope.submit).toEqual(jasmine.any(Function));
		});
		it('on success should set $scope.signUpModel.validEmail to false', () => {
			$deferred.resolve();
			$scope.submit();
			$scope.$apply();

			expect($scope.signUpModel.emailError).toEqual(false);
		});
		it('on error should set $scope.signUpModel.validEmail to true', () => {
			$deferred.reject();
			$scope.submit();
			$scope.$apply();

			expect($scope.signUpModel.emailError).toEqual(true);
		});
	});
});