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
		it('should have attribute userNameError set to false', () => {
			expect($scope.signUpModel.userNameError).toEqual(false);
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
		it('should set $scope.signUpModel.emailError to false on success', () => {
			$deferred.resolve();
			$scope.submit();
			$scope.$apply();

			expect($scope.signUpModel.emailError).toEqual(false);
		});
		it('should set $scope.signUpModel.userNameError to false on success', () => {
			$deferred.resolve();
			$scope.submit();
			$scope.$apply();

			expect($scope.signUpModel.userNameError).toEqual(false);
		});
		it('should set only $scope.signUpModel.userNameError to true if user name all ready exists in DB', () => {
			$deferred.reject({
				data: {
					wrongFields: ['userNameError']
				}
			});
			$scope.submit();
			$scope.$apply();

			expect($scope.signUpModel.emailError).toEqual(false);
			expect($scope.signUpModel.userNameError).toEqual(true);
		});
		it('should set only $scope.signUpModel.emailError to true if email is all ready exists in DB', () => {
			$deferred.reject({
				data: {
					wrongFields: ['emailError']
				}
			});
			$scope.submit();
			$scope.$apply();

			expect($scope.signUpModel.emailError).toEqual(true);
			expect($scope.signUpModel.userNameError).toEqual(false);
		});
		it('should set only $scope.signUpModel.emailError && $scope.signUpModel.emailError to true if both all ready exists in DB', () => {
			$deferred.reject({
				data: {
					wrongFields: ['emailError', 'userNameError']
				}
			});
			$scope.submit();
			$scope.$apply();

			expect($scope.signUpModel.userNameError).toEqual(true);
			expect($scope.signUpModel.emailError).toEqual(true);
		});
	});
});