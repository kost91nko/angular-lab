'use strict';

describe('Controller: AngularFunctionsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularLabApp'));

  var AngularFunctionsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AngularFunctionsCtrl = $controller('AngularFunctionsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
