'use strict';

import should from 'should';
import request from 'supertest';
import path from 'path';
import appConfig from '../configuration/config';

describe('App', () => {

	describe('Index routing', () => {
		it('should return index.html', (done) => {
			let indexPage = path.join(__dirname, '../..') + '/App/views/index.html';

			request(appConfig.devUrl)
				.get('/')
				.send(indexPage)
				// end handles the response
				.end((err, res) => {
					if (err) {
						throw err;
					}

					res.should.have.property('status', 200);
					done();
				});
		});
	});
});