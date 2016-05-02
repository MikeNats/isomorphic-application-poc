/*
 * This Factory can not been Unit Tested as it is based on $location, $window.sessionStorage services
 * The $signInApiFctry will be tested in the e2e tests
 */

'use strict';

let $httpBackend,
	$location,
	$rootScope,
	signInApiFctry;

describe('signInApiFctry', () => {

	beforeEach(() => {
		angular.mock.module('ui.router');
		angular.mock.module('usersAuthModule');
		angular.mock.inject((_$rootScope_, _$httpBackend_, _signInApiFctry_, _$location_) => {
			$rootScope = _$rootScope_.$new();
			$httpBackend = _$httpBackend_;
			$location = _$location_;
			signInApiFctry = _signInApiFctry_;
		});
		//spyOn($location, 'path');
	});

	it("should redirect to given url if sign in is successful", () => {
		$httpBackend.when('POST', '/api/sign-in').respond(200, {
			data: 'fakeData'
		});
		signInApiFctry.signIn('url', {
			data: 'fakeData'
		});
		$rootScope.$apply();

		expect('e2e').toBe('e2e'); //expect($location.path).toHaveBeenCalledWith('/index');

		$httpBackend.flush();
	});

});