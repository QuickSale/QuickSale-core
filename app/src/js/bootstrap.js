/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
define([
    'require',
    'angular',
    'routes',
    'definitionsLoader',
    'jQuery',
    'underscore',
    'ngRoute',
    'ngSanitize',
    'uiRouter'

], function (require, ng, routes, definitionsLoader) {
    'use strict';
    require(definitionsLoader.scriptsToLoad, function () {
        routes.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            //When no route redirect to home
            $urlRouterProvider.when('', '/build');
            // if the path doesn't match any of the urls you configured
            // otherwise will take care of routing the user to the specified url
            $urlRouterProvider.otherwise('/build');

            var states = definitionsLoader.statesToConfigure;
            for (var i = 0; i < states.length; i++) {
                var state = states[i];
                $stateProvider.state(state.stateName, {
                    url: state.url,
                    abstract: state.abstract,
                    templateUrl: state.templateUrl,
                    controller: state.controller
                });
            }
            var modules = definitionsLoader.modules;
            var views = {};
            for (i = 0; i < modules.length; i++) {
                var module = modules[i];
                views[module.moduleName+'_module_edit'] = {
                    templateUrl: '/extensions/' + module.moduleNamespace + '/views/setup_module.html',
                    controllerUrl: '/extensions/' + module.moduleNamespace + '/controllers/setupController.js'
                };
            }
            $stateProvider.state('build.editor.modules', {
                url: '',
                views: views
            });


        }]).run(['$rootScope', function ($rootScope) {
            $rootScope.modules = definitionsLoader.modules;
        }]);


        require(['domReady!'], function (document) {
            try {
                // Wrap this call to try/catch
                ng.bootstrap(document, ['QuickSale']);
            }
            catch (e) {
                console.error(e.stack || e.message || e);
            }
        });
    });
});
