define(['./module'], function (directives) {
  'use strict';
  directives.directive('inputField', function () {
    return {
      restrict: 'EA',
      //transclude: true,
      scope: {
        placeholder: "@placeholder",
        title: "@title",
        data: "@data",
        type: "@type",
        classes: "@fieldStyle",
        //'io': "=" I can't for the life of me pass the io variable from the parent scope, so I will be using $parent s a temporary work-around.
      },
      //link: function (scope, elem, attrs) {
      //
      //},
      templateUrl: '/views/inputField/index.ejs',
      controller: 'inputFieldController'
    }
  });
});
