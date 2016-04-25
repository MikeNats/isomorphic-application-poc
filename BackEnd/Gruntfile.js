'use strict';


module.exports = (grunt) => {

	require('load-grunt-tasks')(grunt);

	let npmTask = [
		   	'grunt-karma',
		],
		config = {
			karma: {
				unit: {
					configFile: 'karma.conf.js',
					singleRun: true,
					autoWatch: false,
					reporters: ['progress'],
					logLevel: 'DEBUG',
					browsers: ['PhantomJS']
				}
			}
		};

	//Set Grunt configuration
	grunt.initConfig(config);

	//Load Grunt tasks
	npmTask.forEach((npmTask) => {
		grunt.loadNpmTasks(npmTask);
	});

	//Register Grunt Tasks
	grunt.registerTask('default', ['karma']);
};