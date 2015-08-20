define(['./module'], function (controllers) {
  'use strict';
  controllers.controller('inputFieldController', ['$scope', function ($scope) {
    // The data of the input field... We retrieve the data and compare to the original - if changed display the save button.
    console.log($scope);

  }]);
});
