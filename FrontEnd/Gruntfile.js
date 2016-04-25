'use strict';

module.exports = (grunt) => {

	require('load-grunt-tasks')(grunt);

	let npmTask = [
		   	'grunt-karma',
		   	'grunt-browserify',
		   	'grunt-html-minify',
		   	'grunt-contrib-watch',
		   	'grunt-contrib-uglify',
		   	'grunt-contrib-sass'
		],
		config = {
			browserify: {
				dist: {
					options: {
						transform: [
                          ['babelify', {
								'presets': ['es2015']
							}]
                       	]
					},
					files: {
						'../App/app.min.js': ['./src/**/*.js']
					}
				}
			},
			html_minify: {
				all: {
					files: [{
						expand: true,
						cwd: './',
						src: ['./views/**/*.html', '*.html'],
						dest: '../App/',
						ext: '.html'
				    }]
				}
			},
			sass: {
				dist: {
					options: {
						style: 'compressed',
						sourcemap: 'none',
						loadPath: ['node_modules/foundation-sites/assets']
					},
					files: {
						'../App/app.min.css': './scss/app.scss',
					}
				}
			},
			uglify: {
				my_target: {
					files: {
						'./App/app.min.js': ['./App/app.min.js']
					}
				}
			},
			eslint: {
				target: ['./**/*.js', './BackEnd/**/*.js']
			},
			watch: {
				browserify: {
					files: ['./src/**/*.js'],
					tasks: ['browserify']
				},
				html_minify: {
					files: ['./views/**/*.html'],
					tasks: ['html_minify']
				},
				sass: {
					files: './scss/**/*.scss',
					tasks: ['sass']
				},
				uglify: {
					files: ['./src/**/*.js'],
					tasks: ['uglify']
				}
			},
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
	grunt.registerTask('test', ['karma']);
	grunt.registerTask('default', ['watch']);
};