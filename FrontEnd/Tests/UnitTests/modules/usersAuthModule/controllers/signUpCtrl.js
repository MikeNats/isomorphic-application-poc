/* jasmine specs for controllers go here */

'use strict';

let $controller,
	$scope = {},
	signUpApiFctry = jasmine.createSpy('signUpApiFctry');

describe('signUpCtrl', () => {
	beforeEach(() => {
		angular.mock.module('usersAuthModule');

		inject((_$controller_, _signUpApiFctry_) => {
			_$controller_('signUpCtrl', {
				$scope: $scope
			});
		});
		$scope.submit
	});

	it('should have attached submit function to its scope', () => {
		expect($scope.submit).toEqual(jasmine.any(Function));
	});

	describe('signup', () => {

		it('should been attached on the scope', () => {
			expect($scope.signup).toEqual(jasmine.any(Object));
		});
		it('should have attribute userName set to empty string', () => {
			expect($scope.signup.userName).toEqual('');
		});
		it('should have attribute email set to empty string', () => {
			expect($scope.signup.email).toEqual('');
		});
		it('should have attribute passWord set to empty string', () => {
			expect($scope.signup.passWord).toEqual('');
		});
		it('should have attribute reTypedPassWord set to empty string', () => {
			expect($scope.signup.reTypedPassWord).toEqual('');
		});
	});


	fdescribe('submit', () => {

		it('should been attached on the scope', () => {
			expect($scope.submit).toEqual(jasmine.any(Function));
		});
		it('should been invoke signUpApiFctry', () => {
			//$scope.submit();
			//expect(4).toEqual(4);
			//expect(signUpApiFctry).toHaveBeenCalled();
		});
	});
});