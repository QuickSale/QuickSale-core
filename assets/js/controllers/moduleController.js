define(['./module'], function (controllers) {
  'use strict';
  controllers.controller('moduleController', ['$scope', function ($scope) {
    // Fetch page names...
    $scope.$on("disable_editMode", function (event, moduleId) {
      if (moduleId == $scope.moduleId) {
        // Show a small preview?
      }
    });
    $scope.$on("enable_editMode", function (event, moduleId) {
      if (moduleId == $scope.moduleId) {
        // Show editing fields...
      }
    });


  }]);
  return controllers;
});
