////http://angular-translate.github.io/docs/#/guide/22_unit-testing-with-angular-translate
//
//describe('should translate', function () {
//
//    beforeEach(module('adminApp.controllers.home', function ($provide, $translateProvider) {
//
//        $provide.factory('customLoader', function ($q) {
//            return function () {
//                var deferred = $q.defer();
//                deferred.resolve({});
//                return deferred.promise;
//            };
//        });
//
//        $translateProvider.useLoader('customLoader');
//
//    }));
//
//    var HomeCtrl, scope;
//
//    beforeEach(inject(function ($controller, $rootScope, $translate) {
//        scope = $rootScope.$new();
//
//
//        HomeCtrl = $controller('HomeCtrl', {
//            $scope: scope
//        });
//    }));
//
//    it('should do something', function () {
//       // $httpBackend.expectGET('app/modules/admin/languages/locale-en.json');
//        expect(scope.test1).toBeDefined();
//    });
//});