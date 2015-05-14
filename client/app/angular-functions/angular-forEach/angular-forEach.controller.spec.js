'use strict';

describe('Controller: AngularForEachCtrl', function () {

  // load the controller's module
  beforeEach(module('angularLabApp'));

  var AngularForEachCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AngularForEachCtrl = $controller('AngularForEachCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
