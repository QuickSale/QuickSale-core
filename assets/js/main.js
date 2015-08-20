'use strict';
require.config({
  waitSeconds: 10,
  paths: {
    "jquery": "../bower_components/jquery/dist/jquery",
    "angular": "../bower_components/angular/angular",
    "ngRoute": "../bower_components/angular-route/angular-route",
    "ngSanitize": "../bower_components/angular-sanitize/angular-sanitize",
    "uiRouter": "../bower_components/angular-ui-router/release/angular-ui-router",
    "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap",
    "Sortable": "../bower_components/Sortable/Sortable",
    "ngSortable": "../bower_components/Sortable/ng-sortable",
    "underscore": "../bower_components/underscore/underscore",
    "domReady": "../bower_components/requirejs-domready/domReady",
    "definitionsLoader": "scripts/definitionsLoader",
    "routes": "routes"
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
    }
  },

  deps: [
    // kick start application... see bootstrap.js
    '/js/bootstrap.js'
  ]
});
