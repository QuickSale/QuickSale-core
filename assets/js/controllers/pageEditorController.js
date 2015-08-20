define(['./module'], function (controllers) {
  'use strict';
  controllers.controller('pageEditorController', ['$scope', function ($scope) {
    $scope.module_editing = [];

    $scope.saveModule = function (module_id) {
      $scope.module_editing.splice($scope.module_editing.indexOf(module_id), 1);
      $scope.$broadcast('disable_editMode', module_id);

    };

    $scope.deleteModule = function (module_id) {
      filterArray($scope.pageModules, {module_id: module_id});
    };

    $scope.editModule = function (module_id) {
      $scope.module_editing.push(module_id);
      $scope.$broadcast('enable_editMode', module_id);
    };

    /*
     OP Filter. Filters an array based on the properties to delete. If properties match, then the object is deleted.
     */
    var filterArray = function (array, attributes) {
      for (var i = array.length - 1; i >= 0; i--) {
        var attributeKeys = Object.keys(attributes);
        attributeKeys.forEach(function (attributeName) {
          if (array[i][attributeName] == attributes[attributeName]) {
            console.log("Removed " + array[i] + " from list.");
            array.splice(i, 1);
          }
        });
      }
    };


  }]);
  return controllers;
});
