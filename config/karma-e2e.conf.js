//basePath = '../public';
//
//files = [
//    '../tests/lib/angular-scenario.js',
//    '../test/e2e/**/*.js'
//];
//
//frameworks = ["ng-scenario"];

//autoWatch = false;
//
//browsers = ['Chrome'];

//singleRun = true;

//proxies = {
//    '/': 'http://localhost:8000/'
//};
//
//junitReporter = {
//    outputFile: 'test_out/e2e.xml',
//    suite: 'e2e'
//};
//npm install -g karma-ng-scenario --save-dev
module.exports = function (config) {
    config.set({
        basePath: '../public',

        frameworks: ["ng-scenario", 'jasmine'],

        files: [
            'js/libs/jquery.js',
            'js/libs/angular.js',
            'js/libs/*.js',
            '../tests/e2e/*.js'
//            '../tests/e2e/*.html'
        ],

        urlRoot: '/_karma_/',

        autoWatch: false,

        // web server port
        port: 9000,


//        preprocessors: {
//            '../tests/e2e/*.html': ['html2js']
//        },

        // cli runner port
        runnerPort: 9100,

        browsers: ['Chrome'],
        singleRun: true,
        reporters: ['progress'],

        proxies: {
            '/': 'http://localhost:3000/'
        },
        logLevel: config.LOG_INFO,
        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};