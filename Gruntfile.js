'use strict';

module.exports = (grunt) => {

	require('load-grunt-tasks')(grunt);

	let npmTask = [
		   	'grunt-karma',
		   	'grunt-browserify',
		   	'grunt-html-minify',
		   	'grunt-contrib-watch',
		   	'grunt-contrib-uglify'
		],
		config = {
			browserify: {
  				dist: {
  					options: {
                       	transform: [
                          [ 'babelify', { 'presets': ['es2015'] }]
                       	]
                    },
					files: {
				      './FrontEnd/app/app.min.js': ['./FrontEnd/src/**/*.js']
		    		}
		    	}
		    },
		    html_minify: {
		    	all: {
			        files:[{
						expand: true,
						cwd: './FrontEnd/',
						src: ['views/**/*.html'],
						dest: './FrontEnd/app/',
						ext:'-min.html'
				    }]
			    }
			},
			uglify: {
			    my_target: {
					files: {
				        './FrontEnd/app/app.min.js': ['./FrontEnd/app/app.min.js']
				    }
				}
			},
			eslint: {
				target: ['./FrontEnd/**/*.js', './BackEnd/**/*.js']
			},
			watch:{
				browserify: {
					files:[ './FrontEnd/src/**/*.js' ],
					tasks: ['browserify']
				},
				html_minify: {
					files:[ './FrontEnd/views/**/*.html' ],
					tasks: [ 'html_minify']
				},
				// uglify: {
				// 	files:[ './FrontEnd/src/**/*.js' ],
				// 	tasks: [ 'uglify']
				// }
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