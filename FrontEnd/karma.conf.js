// Karma configuration
// Generated on Mon Apr 11 2016 00:39:01 GMT+0100 (BST)

module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: './',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['browserify', 'jasmine'],


		// list of files / patterns to load in the browser
		files: [
            'modules/**/*.js',
			'node_modules/angular-mocks/angular-mocks.js',
            'Tests/UnitTests/**/*.js'
        ],

		preprocessors: {
			'modules/**/*.js': ['browserify'],
			'Tests/UnitTests/**/*.js': ['browserify']
		},


		// list of files to exclude
		exclude: [],


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],

		browserify: {
			debug: true,
			transform: [
                [
                    'babelify', {
						'presets': ['es2015']
                    }
                ]
            ]
		},


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	})
}