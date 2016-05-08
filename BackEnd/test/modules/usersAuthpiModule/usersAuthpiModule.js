'use strict';

import should from 'should';
import request from 'supertest';
import appConfig from '../../../configuration/config';
import getDbConnectionUrl from '../../../configuration/getDbConnectionUrl';
import USER_API_PATHS from '../../../modules/usersAuthpiModule/consts/USER_API_PATHS';

describe('usersAuthpiModule', () => {

	let user = {
		userName: 'testUser',
		email: 'testUser@gmail.com',
		passWord: 'testUserPass'
	}

	describe('SignUp', () => {

		it('should Sign Up if user is Unique', (done) => {
			request(appConfig.devUrl)
				.post('/api' + USER_API_PATHS.SIGN_UP)
				.send(user)
				.end((err, res) => {
					if (err) {
						throw err;
					}

					res.should.have.property('status', 200);
					done();
				});
		});
		it('should NOT Sign Up if user is Not Unique', (done) => {
			request(appConfig.devUrl)
				.post('/api' + USER_API_PATHS.SIGN_UP)
				.send(user)
				.end((err, res) => {
					if (err) {
						throw err;
					}

					res.should.have.property('status', 401);
					done();
				});
		});
	});

	describe('SignIn', () => {

		it('should Sign In if userName and passWord are Valid', (done) => {
			request(appConfig.devUrl)
				.post('/api' + USER_API_PATHS.SIGN_IN)
				.send(user)
				.end((err, res) => {
					if (err) {
						throw err;
					}
					user.token = res.body.token; //<<<<<<<<<<< Stores token for the next test

					res.should.have.property('status', 200);
					done();
				});
		});
		it('should NOT Sign In if userName and passWord are NOT Valid', (done) => {
			user.userName = 'invalidUserName';
			user.passWrod = 'invalidpassWrod';

			request(appConfig.devUrl)
				.post('/api' + USER_API_PATHS.SIGN_IN)
				.send(user)
				.end((err, res) => {
					if (err) {
						throw err;
					}

					res.should.have.property('status', 401);
					done();
				});
		});
	});

	describe('Authenticate', () => {

		it('should Sign In if token is Valid', (done) => {
			request(appConfig.devUrl)
				.post('/api' + USER_API_PATHS.AUTH)
				.send(user)
				.end((err, res) => {
					if (err) {
						throw err;
					}

					res.should.have.property('status', 200);
					done();
				});
		});
		it('should NOT Sign In if token is NOT Valid', (done) => {
			user.token = 'wrongToken';

			request(appConfig.devUrl)
				.post('/api' + USER_API_PATHS.AUTH)
				.send(user)
				// end handles the response
				.end((err, res) => {
					if (err) {
						throw err;
					}

					res.should.have.property('status', 401);
					done();
				});
		});
	});

	describe('Delete User', () => {
		it('should Delete User if email is Valid', (done) => {
			request(appConfig.devUrl)
				.post('/api' + USER_API_PATHS.DELETE)
				.send(user)
				.end((err, res) => {
					if (err) {
						throw err;
					}

					res.should.have.property('status', 200);
					done();
				});
		});
		it('should NOT Delete User if email is NOT Valid', (done) => {
			user.email = 'wrongEmail';

			request(appConfig.devUrl)
				.post('/api' + USER_API_PATHS.DELETE)
				.send(user)
				// end handles the response
				.end((err, res) => {
					if (err) {
						throw err;
					}

					res.should.have.property('status', 401);
					done();
				});
		});
	});
});