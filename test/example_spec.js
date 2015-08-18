define(['../app/js/bootstrap.js', 'angularMocks'], function (app, angularMocks) {

    describe('Testing module core information', function () {
        beforeEach(module('QuickSale'));

        var $controller;
        beforeEach(inject(function (_$controller_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
        }));

        it('should be able to find the core-application controllers are registered.', function () {
            var $scope = {};
            var controller = $controller('builderController', {$scope: $scope});
            expect($scope.pages.length).toEqual(2);
        });


    });
});