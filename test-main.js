var allTestFiles = [];
var TEST_REGEXP = /(_spec|_test)\.js$/i;
for (var file in window.__karma__.files) {
  if (TEST_REGEXP.test(file)) allTestFiles.push(file);
  console.log(file);
}
require.config({
  baseUrl: '/base/app/js',
  paths: {
    "jquery": "../bower_components/jquery/dist/jquery",
    "angular": "../bower_components/angular/angular",
    "ngRoute": "../bower_components/angular-route/angular-route",
    "ngSanitize": "../bower_components/angular-sanitize/angular-sanitize",
    "ngUi": "../bower_components/angular-ui/build/angular-ui",
    "uiRouter": "../bower_components/angular-ui-router/release/angular-ui-router",
    "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap",
    "Sortable": "../bower_components/Sortable/Sortable",
    "ngSortable": "../bower_components/Sortable/ng-sortable",
    "underscore": "../bower_components/underscore/underscore",
    "domReady": "../bower_components/requirejs-domready/domReady",
    "definitionsLoader": "scripts/definitionsLoader",
    "routes": "routes",
    angularMocks: "bower_components/angular-mocks/angular-mocks"
  },
  shim: {
    angular: {
      exports: "angular",
      deps: ['jquery']
    },
    'Sortable': {
      exports: 'Sortable'
    },
    'ngSortable': {
      exports: 'ngSortable',
      deps: ['Sortable']
    },
    'ngUi': ['angular'],
    'ngRoute': ['angular'],
    'uiRouter': ['angular'],
    'ngSanitize': ['angular'],
    'definitionsLoader': {
      exports: 'definitionsLoader'
    },
    'underscore': {
      exports: '_'
    },
    'routes': {
      exports: 'routes'
    },
    angularMocks: ['angular']
  },
  // dynamically load all test files
  deps: allTestFiles,
  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
