/**
 * Created by Samer on 2015-08-14.
 */

define(['./QuickSale'], function (QuickSale) {
    'use strict';
    return QuickSale.config(function ($stateProvider) {
        $stateProvider
            .state('build', {
                abstract: true,
                url: '/build',
                controller: "builderController",
                templateUrl: '/views/pageBuilder/index.html'

            })
            .state('build.editor', {
                controller: "pageEditorController",
                templateUrl: '/views/pageEditor/index.html'

            });
    });
})
;