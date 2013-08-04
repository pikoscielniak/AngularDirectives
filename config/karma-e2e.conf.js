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
//npm install karma-ng-scenario --save-dev
module.exports = function (config) {
    config.set({
        basePath: '../public',

        frameworks: ["ng-scenario", 'jasmine'],

        files: [
            '../tests/lib/angular-mocks.js',
            '../tests/e2e/*.js'
        ],

        urlRoot: '/_karma_/',

        autoWatch: false,

        browsers: ['Chrome'],
        singleRun: true,

        proxies: {
            '/public/': 'http://localhost:3000/'
        },

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};