'use strict';

let $compile,
	$rootScope,
	$deferred,
	element,
	userAuthApiFctry;

describe('validateUserName', () => {

	beforeEach(() => {
		angular.mock.module('usersAuthModule');
		angular.mock.inject((_$rootScope_, _$compile_, _$q_, _userAuthApiFctry_) => {
			$rootScope = _$rootScope_.$new();
			$deferred = _$q_.defer(); // To create a mock instance of defer
			$compile = _$compile_;
			$rootScope.signUpModel = {
				passWord: '',
				reTypedPassWord: '',
				passWordError: false,
				userNameError: false
			};
			spyOn(_userAuthApiFctry_, 'isUserNameValid').and.returnValue($deferred.promise); // Jasmine Spy to return the $deferred promise
			element = $compile('<input  ng-model = "signUpModel.userName" type = "text" id = "signUpUserName" validate-user-name required />')($rootScope);
			$rootScope.$digest();
		});
	});

	it('should set userNameError to true if user name exists', () => {
		$deferred.reject({
			status: 'Unauthorized'
		});
		$rootScope.$digest();

		expect($rootScope.signUpModel.userNameError).toBe(true);
	});
	it('should set userNameError to false if user name is unique', () => {
		$deferred.resolve({
			status: 'Success'
		});
		$rootScope.$digest();

		expect($rootScope.signUpModel.userNameError).toBe(false);
	});
});