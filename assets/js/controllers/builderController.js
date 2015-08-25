define(['./module', 'definitionsLoader', 'sails.io', 'socket.io'], function (controllers, definitionsLoader, sails, sockets) {
  'use strict';
  return controllers.controller('builderController', function ($scope) {
    // Fetch page names...
    $scope.io = sails(sockets);
    $scope.io.sails.url = 'http://localhost:1337';


    var runActions = function (eventName, content) {
      definitionsLoader.modulesToLoad.forEach(function (module) {
        var injector = angular.injector([module]);
        if (injector != undefined) {
          if (injector.has('actions')) {
            var eventResponse = injector.get('actions');
            if (eventResponse != undefined) {
              eventResponse[eventName](content);
            }
          }
        }
      });
    };
    runActions('main_menu', {msg: "loool"});

    var runFilters = function (eventName, content) {
      definitionsLoader.modulesToLoad.forEach(function (module) {
        var injector = angular.injector([module]);
        if (injector != undefined) {
          if (injector.has('filters')) {
            var eventResponse = injector.get('filters');
            if (eventResponse != undefined) {
              content = eventResponse[eventName](content);
            }
          }
        }
      });
      return content;
    };


    var fetchMenu = function (menuType, content) {
      definitionsLoader.modulesToLoad.forEach(function (module) {
        var injector = angular.injector([module]);
        if (injector != undefined) {
          if (injector.has('filters')) {
            var eventResponse = injector.get('filters');
            if (eventResponse != undefined) {
              content = eventResponse[eventName](content);
            }
          }
        }
      });
      return content;
    };


    var filteredData = runFilters('main_menu', [{
      menu_name: "Home",
      menu_priority: 1,
      menu_href: "http://www.example.com"
    }]);
    console.log(filteredData);


    $scope.addModule = function (moduleName) {
      if ($scope.pageModules.indexOf($scope.currentPage.page_id) == -1)
        $scope.pageModules[$scope.currentPage.page_id] = [];

      definitionsLoader.modules.forEach(function (module) {
        if (module.moduleName == moduleName) {
          if ($scope.pageModules[$scope.currentPage.page_id].indexOf(module) === -1) {
            $scope.pageModules[$scope.currentPage.page_id].push(module);
            console.log("Added module");
          }
        }
      });
    };


    $scope.pages = [{pageTitle: "Home", page_id: 1}, {pageTitle: "About Us", page_id: 2}];
    $scope.fetchArray = function (array, attributes) {
      var returnArray = [];
      for (var i = array.length - 1; i >= 0; i--) {
        var attributeKeys = Object.keys(attributes);
        attributeKeys.forEach(function (attributeName) {
          if (array[i][attributeName] == attributes[attributeName]) {
            returnArray.push(array[i]);
          }
        });
      }
      return returnArray;
    };

    // Fetch page names...
    $scope.allModules = definitionsLoader.modules;
    $scope.pageModules = [];


    console.log(definitionsLoader.modules);


    $scope.changePage = function ($page_id) {
      $scope.currentPage = $scope.fetchArray($scope.pages, {page_id: $page_id})[0];
    };
    $scope.changePage(1);
  });
});
