define(['./module'], function (directives) {
  'use strict';
  directives.directive('inputField', function () {
    return {
      restrict: 'E',
      scope: {
        placeholder: "@placeholder",
        title: "@title",
        dataSet: "@dataSet",
        type: "@type",
        classes: "@fieldStyle"
      },
      templateUrl: '/views/inputField/index.ejs',
      controller: 'inputFieldController'
    }
  });
});
