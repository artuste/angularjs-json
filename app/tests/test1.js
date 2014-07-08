'use strict';
 
describe('Controller: AboutCtrl', function () {
 
    beforeEach(module('stipterApp.controllers.product'));
 
    var AboutCtrl,
        scope;
 
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        AboutCtrl = $controller('AboutCtrl', {
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