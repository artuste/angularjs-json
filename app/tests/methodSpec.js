'use strict';
 
describe('Controller: ManuCtrl', function () {
 
    beforeEach(module('adminApp.controllers.home'));
 
    var MenuCtrl,
        scopeMock,
        locationMock;
 
    beforeEach(inject(function ($controller, $rootScope) {
 
        locationMock = {
            mpath:'',
            setPath: function(path) { this.mpath = path;},
            path: function(){return this.mpath;}
        }
 
        scopeMock = $rootScope.$new();
 
        MenuCtrl = $controller('MenuCtrl', {
            $scope: scopeMock,
            $location: locationMock
        });
    }));
 
    it('should return "active" if current path is the same as menu item', function () {
        locationMock.setPath('categories');
        expect(scopeMock.getPath('categories')).toBe("active");
    });
});