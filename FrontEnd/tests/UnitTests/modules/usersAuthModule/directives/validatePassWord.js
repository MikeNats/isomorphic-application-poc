'use strict';

let $compile,
	$rootScope,
	element;

describe('validatePassWord', () => {

	beforeEach(() => {
		angular.mock.module('usersAuthModule');
		angular.mock.inject((_$rootScope_, _$compile_) => {
			$rootScope = _$rootScope_.$new();
			$compile = _$compile_;
			$rootScope.signUpModel = {
				passWord: '',
				reTypedPassWord: '',
				passWordError: false
			};
			element = $compile('<input  ng-model = "signUpModel.passWord" type = "password" id = "signUpPassWord" validate-pass-word required />')($rootScope);
			$rootScope.$digest();
		});
	});

	it('should set passWordError to true if  pass word is less than 8 characters', () => {
		$rootScope.signUpModel.passWord = 'qwertyu';
		$rootScope.$digest();

		expect($rootScope.signUpModel.passWordError).toBe(true);
	});
	it('should set passWordError to true if pass word is 8 characters but do not contain a digit', () => {
		$rootScope.signUpModel.passWord = 'qwertyui';
		$rootScope.$digest();

		expect($rootScope.signUpModel.passWordError).toBe(true);
	});
	it('should set passWordError to true if pass word is 8 characters contains a digit but it does not contains a special character', () => {
		$rootScope.signUpModel.passWord = 'qwertyui1';
		$rootScope.$digest();

		expect($rootScope.signUpModel.passWordError).toBe(true);
	});
	it('should set passWordError to true if pass word is 8 characters contains  contains a special character but does not contains a digit', () => {
		$rootScope.signUpModel.passWord = 'qwer!';
		$rootScope.$digest();

		expect($rootScope.signUpModel.passWordError).toBe(true);
	});
	it('should set passWordError to true if pass word is less than 8 characters contains  contains a special character and a digit', () => {
		$rootScope.signUpModel.passWord = 'qwer1!';
		$rootScope.$digest();

		expect($rootScope.signUpModel.passWordError).toBe(true);
	});
	it('should set passWordError to false if pass word contains 8 or more characters one or more digits and one or more special characters', () => {
		$rootScope.signUpModel.passWord = 'qwertyui1!';
		$rootScope.$digest();

		expect($rootScope.signUpModel.passWordError).toBe(false);
	});
});