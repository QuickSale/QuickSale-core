define(['./module'], function (controllers) {
  'use strict';
  controllers.controller('inputFieldController', ['$scope', function ($scope) {
    // The data of the input field... We retrieve the data and compare to the original - if changed display the save button.
    var inputInfo = $scope.inputInfo = {};
    var dataName = $scope.data;
    var pluginName = $scope.$parent.$parent.pageModule.moduleName;


    $scope.dataStatus = "Loading..." + $scope.$id;
    $scope.$parent.io.socket.get('/api/plugins/' + pluginName + '/' + dataName, {}, function (response, header) {
      inputInfo.content = "";
      if (header.statusCode == 200) inputInfo.content = response.value;
      $scope.dataStatus = $scope.placeholder;
      $scope.$apply();
    });


    $scope.updateData = function updateData() {
      $scope.$parent.io.socket.post('/api/plugins/' + pluginName + '/' + dataName, {'confValue': inputInfo.content}, function (response) {
        console.log('got response', response)
      });
    };


    /* Code to create plugin entry
     $scope.$parent.io.socket.post('/api/plugins/', { pluginId: pluginName }, function(response) {
     console.log('got response', response)
     });
     */
  }]);
});
