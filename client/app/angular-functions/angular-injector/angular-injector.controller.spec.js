'use strict';

describe('Controller: AngularInjectorCtrl', function () {

  // load the controller's module
  beforeEach(module('angularLabApp'));

  var AngularInjectorCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AngularInjectorCtrl = $controller('AngularInjectorCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
