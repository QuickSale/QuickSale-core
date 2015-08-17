/**
 * Created by Samer on 2015-08-15.
 */
define(['./module'], function (directives) {
    'use strict';
    directives.directive('moduleEdit', function () {
        return {
            restrict: 'A',
            scope: {
                moduleId: "@moduleId"
            },
            templateUrl: '/views/pageBuilder/module-edit/index.html'
        }
    });
});