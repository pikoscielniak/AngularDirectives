// Karma configuration
// Generated on Sat Aug 03 2013 22:28:42 GMT+0200 (Środkowoeuropejski czas letni)
//KARAM 0.9


// base path, that will be used to resolve files and exclude
basePath = '../public';


// list of files / patterns to load in the browser
files = [
    JASMINE,
    JASMINE_ADAPTER,
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

];

// list of files to exclude
exclude = [
    '../tests/lib/angular-scenario.js'
];

preprocessors = {
    'templates/directives/*.html': 'html2js',
    'templates/*.html': 'html2js'
};

// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
