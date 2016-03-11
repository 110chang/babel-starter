// Karma configuration
// Generated on Mon Dec 21 2015 14:01:50 GMT+0900 (JST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'jasmine-jquery', 'jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // RegeneratorRuntime is not defined
      // ref. http://stackoverflow.com/questions/28976748/regeneratorruntime-is-not-defined
      'node_modules/babel-polyfill/browser.js',
      'src/*.js',
      'spec/*Spec.js',
      { pattern: 'fixtures/**', included: false }
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/*.js': ['browserify'],
      'spec/*Spec.js': ['browserify']
    },

    browserify: {
      'debug': true,
      'transform': ['babelify']
    },

    plugins: ['karma-browserify', 'karma-jasmine-jquery', 'karma-jasmine', 'karma-chrome-launcher'],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
