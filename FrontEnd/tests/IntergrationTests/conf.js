'use strict';

/**
 * To install:
 * 1) npm install -g protractor
 * 2) webdriver-manager update
 *
 * To run tests:
 * 1) webdriver-manager start
 * 2) protractor conf.js
 */

exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['modules/**/*.js'],
	baseUrl: 'http://localhost:3000/#/index',

}