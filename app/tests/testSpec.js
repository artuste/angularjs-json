'use strict';
 
describe('Controller: TestCtrl', function () {
    beforeEach(module('adminApp.controllers.product'));
 
    var TestCtrl,
        scope;
 
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        TestCtrl = $controller('TestCtrl', {
            $scope: scope
        });
    }));
 
    it('should contain not null content', function () {
        expect(scope.content).toBeDefined();
        expect(scope.content).not.toBeNull();
    });
});


describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});