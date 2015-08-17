var allTestFiles = [];
var TEST_REGEXP = /(_spec|_test)\.js$/i;
for (var file in window.__karma__.files) {
  if (TEST_REGEXP.test(file)) allTestFiles.push(file);
}
require.config({
  baseUrl: '/app/src/',
  paths: {
    "jQuery": "/app/src/bower_components/jquery/dist/jquery",
    "angular": "/app/src/bower_components/angular/angular",
    "ngRoute": "/app/src/bower_components/angular-route/angular-route",
    "ngSanitize": "/app/src/bower_components/angular-sanitize/angular-sanitize",
    "ngUi": "/app/src/bower_components/angular-ui/build/angular-ui",
    "uiRouter": "/app/src/bower_components/angular-ui-router/release/angular-ui-router",
    "bootstrap": "/app/src/bower_components/bootstrap/dist/js/bootstrap",
    "Sortable": "/app/src/bower_components/Sortable/Sortable",
    "ngSortable": "/app/src/bower_components/Sortable/ng-sortable",
    "underscore": "/app/src/bower_components/underscore/underscore",
    "domReady": "/app/src/bower_components/requirejs-domready/domReady",
    angularMocks: '/app/src/bower_components/angular-mocks/angular-mocks'
  },
  shim: {
    'angular': {
      exports: 'angular'
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
    'uiRouter': {
      deps: ['angular']
    },
    'ngSanitize': ['angular'],
    'definitionsLoader': {
      exports: 'definitionsLoader'
    },
    'underscore': {
      exports: '_'
    },
    'jQuery': {
      exports: 'jQuery'
    },
    'routes': {
      exports: 'routes'
    },
    angularMocks: {
      deps: ['angular']
    }
  },
  // dynamically load all test files
  deps: allTestFiles,
  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
