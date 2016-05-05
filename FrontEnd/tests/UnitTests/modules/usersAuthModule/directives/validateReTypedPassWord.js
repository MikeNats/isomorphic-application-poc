'use strict';

let $compile,
	$rootScope,
	element;

describe('validateReTypedPassWord', () => {

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
			element = $compile('<input  ng-model = "signUpModel.reTypedPassWord"  password = "{{signUpModel.passWord}}" type = "password" validate-re-typed-pass-word required />')($rootScope);
			$rootScope.$digest();
		});
	});

	it('should set passWordError to true if retyped password dont match', () => {
		$rootScope.signUpModel.passWord = 'pass1';
		$rootScope.signUpModel.reTypedPassWord = 'pass2';
		$rootScope.$digest();

		expect($rootScope.signUpModel.reTypedPassWordError).toBe(true);
	});
	it('should set passWordError to false if retyped password match', () => {
		$rootScope.signUpModel.passWord = 'pass1';
		$rootScope.signUpModel.reTypedPassWord = 'pass1';
		$rootScope.$digest();

		expect($rootScope.signUpModel.reTypedPassWordError).toBe(false);
	});
});