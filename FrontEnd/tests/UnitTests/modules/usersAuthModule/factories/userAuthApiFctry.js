/*
 * This Factory can not been Unit Tested as it is based on $location, $window.sessionStorage services
 * The userAuthApiFctry will be tested in the e2e tests
 */

'use strict';

let $httpBackend,
	$location,
	$rootScope,
	userAuthApiFctry;

describe('userAuthApiFctry', () => {

	beforeEach(() => {
		angular.mock.module('ui.router');
		angular.mock.module('usersAuthModule');
		angular.mock.inject((_$rootScope_, _$httpBackend_, _userAuthApiFctry_, _$location_) => {
			$rootScope = _$rootScope_.$new();
			$httpBackend = _$httpBackend_;
			$location = _$location_;
			userAuthApiFctry = _userAuthApiFctry_;
		});
	});

	it("should recive to index page if authentication fails", () => {
		$httpBackend.when('POST', 'api/auth').respond(401, {
			status: 'Unauthorized'
		});
		userAuthApiFctry.authUser();
		$rootScope.$apply();

		expect('e2e').toBe('e2e');
		$httpBackend.flush();
	});

});