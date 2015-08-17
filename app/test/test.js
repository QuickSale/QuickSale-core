define([
    'angular'], function (ng) {
    'use strict';
    ng.module('myApp')
        .factory('Person', function () {
            return function Person (name) {
                this.name = name;
            };
        });
});