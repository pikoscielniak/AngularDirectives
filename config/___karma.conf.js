module.exports = function (config) {
    config.set({

        basePath: '../public',

        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'js/libs/jquery.js',
            'js/libs/angular.js',
            'js/libs/*.js',
            'js/*.js',
            '../tests/lib/*.js',
            'js/controllers/*.js',
            'js/services/*.js',
            'js/directives/*.js',
            'js/filters/*.js',
            '../tests/*.js',
            'templates/directives/*.html',
            'templates/*.html'

        ],
        // list of files to exclude
        exclude: ['../tests/lib/angular-scenario.js'],
//
        //npm install karma-ng-html2js-preprocessor --save-dev
//        ngHtml2JsPreprocessor: {
//            stripPrefix: ''
//        },

        preprocessors: {
//            'src/*.js': 'coverage'
            'templates/directives/*.html': ['ng-html2js'],
            'templates/*.html': ['ng-html2js']
        },
        // use dots reporter, as travis terminal does not support escaping sequences
        // possible values: 'dots', 'progress', 'junit', 'teamcity'
        // CLI --reporters progress
        reporters: ['progress'],

//        junitReporter: {
//            // will be resolved to basePath (in the same way as files/exclude patterns)
//            outputFile: 'test-results.xml'
//        },


        // web server port
        // CLI --port 9876
        port: 9876,

        // cli runner port
        // CLI --runner-port 9100
        runnerPort: 9100,

        // enable / disable colors in the output (reporters and logs)
        // CLI --colors --no-colors
        colors: true,

        // level of logging
        // possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
        // CLI --log-level debug
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        // CLI --auto-watch --no-auto-watch
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        // CLI --browsers Chrome,Firefox,Safari
        browsers: ['Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        // CLI --capture-timeout 5000
        captureTimeout: 5000
    });
};

//karma.configure({
//    ngHtml2JsPreprocessor: {
//        stripPrefix: 'app/views'
//    }
//});