'use strict';

let $scope,
	$deferred,
	$window;

describe('signUpCtrl', () => {

	beforeEach(() => {
		angular.mock.module('usersAuthModule');

		inject((_$rootScope_, _$controller_, _userAuthApiFctry_, _$q_, _$window_) => {
			$scope = _$rootScope_.$new(); // Gets the rootScope_ with .apply
			$window = _$window_; //Get global window
			$deferred = _$q_.defer(); // To create a mock instance of defer
			spyOn(_userAuthApiFctry_, 'signUp').and.returnValue($deferred.promise); // Jasmine Spy to return the $deferred promise
			_$controller_('signUpCtrl', {
				$scope: $scope,
				userAuthApiFctry: _userAuthApiFctry_
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
		it('should have attribute reTypedPassWordError set to false', () => {
			expect($scope.signUpModel.reTypedPassWordError).toEqual(false);
		});
	});

	describe('submit', () => {

		it('should been attached on the scope', () => {
			expect($scope.submit).toEqual(jasmine.any(Function));
		});
		it('should set $scope.signUpModel.emailError to false on success', () => {
			$deferred.resolve({
				data: {
					token: 'validTokken'
				}
			});
			$scope.submit();
			$scope.$apply();

			expect($scope.signUpModel.emailError).toEqual(false);
		});

		it('should set $window.sessionStorage.token on success', () => {
			$deferred.resolve({
				data: {
					token: 'validTokken'
				}
			});
			$scope.submit();
			$scope.$apply();

			expect($window.sessionStorage.token.length === 'token').toEqual(false);
		});
		it('should set $scope.signUpModel.userNameError to false on success', () => {
			$deferred.resolve({
				data: {
					token: 'validTokken'
				}
			});
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