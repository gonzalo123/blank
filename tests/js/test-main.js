var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    allTestFiles.push(pathToModule(file));
  }
});

console.log(allTestFiles);
require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  paths: {
    'domReady': 'www/assets/requirejs-domready/domReady',
    'angular': 'www/assets/angular/angular',
    "uiRouter": "www/assets/angular-ui-router/release/angular-ui-router",
    "uiBootstrap": "www/assets/angular-bootstrap/ui-bootstrap-tpls"
  },

  shim: {
    'angular': {exports: 'angular'},
    'uiRouter': {deps: ['angular']},
    'uiBootstrap': {deps: ['angular']}
  },

  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
