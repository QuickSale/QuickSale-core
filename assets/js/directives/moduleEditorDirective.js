define(['./module'], function (directives) {
  'use strict';
  directives.directive('moduleEdit', function () {
    return {
      restrict: 'AE',
      scope: {
        moduleId: "@moduleId"
      }
    }
  });
});
