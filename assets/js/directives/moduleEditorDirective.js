define(['./module'], function (directives) {
  'use strict';
  directives.directive('moduleEdit', function () {
    return {
      restrict: 'A',
      scope: {
        moduleId: "@moduleId"
      }
    }
  });
});
