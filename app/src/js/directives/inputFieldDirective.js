/**
 * Created by Samer on 2015-08-15.
 */
define(['./module'], function (directives) {
    'use strict';
    directives.directive('QuicksaleInputField', function () {
        return {
            restrict: 'E',
            scope: false,
            templateUrl: '/views/pageBuilder/module-edit/index.html'
        }
    });
});