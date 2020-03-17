// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
<<<<<<< HEAD
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
=======
    frameworks: ['jasmine', '@angular/cli'],
>>>>>>> e5d8334d8eb161836b324345d7e8d285e2d74608
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
<<<<<<< HEAD
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/people-front'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
=======
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
>>>>>>> e5d8334d8eb161836b324345d7e8d285e2d74608
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
<<<<<<< HEAD
    singleRun: false,
    restartOnFileChange: true
=======
    singleRun: false
>>>>>>> e5d8334d8eb161836b324345d7e8d285e2d74608
  });
};
