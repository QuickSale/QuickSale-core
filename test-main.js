var allTestFiles = [];
var TEST_REGEXP = /(_spec|_test)\.js$/i;
for (var file in window.__karma__.files) {
  if (TEST_REGEXP.test(file)) allTestFiles.push(file);
}
require.config({
  baseUrl: '/base/',
  paths: {
    "jQuery": "/app/bower_components/jquery/dist/jquery",
    "angular": "/app/bower_components/angular/angular",
    "ngRoute": "/app/bower_components/angular-route/angular-route",
    "ngSanitize": "/app/bower_components/angular-sanitize/angular-sanitize",
    "ngUi": "/app/bower_components/angular-ui/build/angular-ui",
    "uiRouter": "/app/bower_components/angular-ui-router/release/angular-ui-router",
    "bootstrap": "/app/bower_components/bootstrap/dist/js/bootstrap",
    "Sortable": "/app/bower_components/Sortable/Sortable",
    "ngSortable": "/app/bower_components/Sortable/ng-sortable",
    "underscore": "/app/bower_components/underscore/underscore",
    "domReady": "/app/bower_components/requirejs-domready/domReady",
    angularMocks: '/app/bower_components/angular-mocks/angular-mocks'
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
