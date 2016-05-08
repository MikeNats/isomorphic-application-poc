'use strict';

let $httpBackend,
	$location,
	$rootScope,
	$http,
	userAuthApiFctry,
	data,
	USER_API_PATHS;

describe('userAuthApiFctry', () => {

	beforeEach(() => {
		angular.mock.module('usersAuthModule');
		angular.mock.inject((_$httpBackend_, _$http_, _userAuthApiFctry_, _USER_API_PATHS_) => {
			$httpBackend = _$httpBackend_;
			$http = _$http_;
			USER_API_PATHS = _USER_API_PATHS_;
			userAuthApiFctry = _userAuthApiFctry_;
			spyOn($http, 'post');
		});
	});

	it("should POST userName and passWord when signIn method is invoked", () => {
		data = {
			userName: "TestUser",
			passWord: "TestPassWord"
		};
		userAuthApiFctry.signIn(data);

		expect($http.post).toHaveBeenCalledWith(USER_API_PATHS.SIGN_IN, data);
	});
	it("should POST userName and passWord when signUp method is invoked", () => {
		data = {
			userName: "TestUser",
			email: "testEmail@gmail.com",
			passWord: "TestPassWord"
		};
		userAuthApiFctry.signUp(data);

		expect($http.post).toHaveBeenCalledWith(USER_API_PATHS.SIGN_UP, data);
	});
	it("should POST token when authUser method is invoked", () => {
		data = {
			token: 'relwdhfbf24yebfkh324ubqfjhwerb'
		};
		userAuthApiFctry.authUser(data.token);

		expect($http.post).toHaveBeenCalledWith(USER_API_PATHS.AUTH, data);
	});
	it("should POST userName when isUserNameValid method is invoked", () => {
		data = {
			userName: 'TestUser'
		};
		userAuthApiFctry.isUserNameValid(data.userName);

		expect($http.post).toHaveBeenCalledWith(USER_API_PATHS.IS_USER_NAME_VALID, data);
	});

});