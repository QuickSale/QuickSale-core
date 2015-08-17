define(['./module'], function (directives) {
    'use strict';
    directives.directive('pageEditor', function () {
        return {
            restrict: 'E',
            scope: false,
            templateUrl: '/views/index.html'
        }
    });
});