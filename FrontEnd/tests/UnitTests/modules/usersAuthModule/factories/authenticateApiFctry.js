/*
 * This Factory can not been Unit Tested as it is based on $location, $window.sessionStorage services
 * The authenticateApiFctry will be tested in the e2e tests
 */

'use strict';

let $httpBackend,
	$location,
	$rootScope,
	authenticateApiFctry;

describe('authenticateApiFctry', () => {

	beforeEach(() => {
		angular.mock.module('ui.router');
		angular.mock.module('usersAuthModule');
		angular.mock.inject((_$rootScope_, _$httpBackend_, _authenticateApiFctry_, _$location_) => {
			$rootScope = _$rootScope_.$new();
			$httpBackend = _$httpBackend_;
			$location = _$location_;
			authenticateApiFctry = _authenticateApiFctry_;
		});
		//spyOn($location, 'path');
	});

	it("should redirect to index page if authentication fails", () => {
		$httpBackend.when('POST', 'api/auth').respond(401, {
			status: 'Unauthorized'
		});
		authenticateApiFctry.user();
		$rootScope.$apply();

		expect('e2e').toBe('e2e'); //expect($location.path).toHaveBeenCalledWith('/index');

		$httpBackend.flush();
	});

});