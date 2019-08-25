module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'jasmine-matchers'],
    files: ['./src/*.ts', './src/*.js', './src/app/brand/*.spec.ts'],
    plugins: ['karma-jasmine', 'karma-coverage', 'karma-jasmine-html-reporter', 'karma-jasmine-matchers', 'karma-webpack', 'karma-chrome-launcher', 'karma-sourcemap-loader', 'ts-loader', 'karma-mocha-reporter', 'karma-remap-coverage'],
    reporters: ['dots', 'mocha', 'coverage', 'progress'],
    colors: true,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    port: 9876,
    logLevel: config.LOG_WARN
  });
};
