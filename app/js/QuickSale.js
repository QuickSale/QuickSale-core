define([
    'angular',
    'uiRouter',
    'Sortable',
    'ngSortable',
    'controllers/index',
    'directives/index',
    'filters/index'], function (angular) {
    'use strict';
    return angular.module('QuickSale', [
        'QuickSale.controllers',
        'QuickSale.directives',
        'QuickSale.filters',
        'ng-sortable',
        'ui.router'
    ]);
});