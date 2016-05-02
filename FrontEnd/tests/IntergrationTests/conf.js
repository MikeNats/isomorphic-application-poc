'use strict';

exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['modules/**/*.js'],
	baseUrl: 'http://localhost:3000/#/index',

}