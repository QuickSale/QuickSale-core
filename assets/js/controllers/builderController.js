define(['./module', 'definitionsLoader'], function (controllers, definitionsLoader) {
  'use strict';
  return controllers.controller('builderController', function ($scope) {
    // Fetch page names...
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

    $scope.loadPageModules = function ($page_id) {
      $scope.pageModules[$page_id] = definitionsLoader.modules;
      $scope.allModules = definitionsLoader.modules;
    };

    // Fetch page names...
    $scope.allModules = [];
    $scope.pageModules = [];

    $scope.changePage = function ($page_id) {
      $scope.currentPage = $scope.fetchArray($scope.pages, {page_id: $page_id})[0];
      $scope.loadPageModules($page_id);


    };
    $scope.changePage(1);
  });
});
