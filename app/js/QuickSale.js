define([
    'angular',
    'uiRouter',
    'Sortable',
    'ngSortable',
    'controllers/index',
    'directives/index',
    'filters/index'], function (ng) {
    'use strict';
    return ng.module('QuickSale', [
        'QuickSale.controllers',
        'QuickSale.directives',
        'QuickSale.filters',
        'ng-sortable',
        'ui.router'
    ]);
});