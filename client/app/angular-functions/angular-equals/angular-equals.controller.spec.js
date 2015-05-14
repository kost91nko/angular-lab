'use strict';

describe('Controller: AngularEqualsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularLabApp'));

  var AngularEqualsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AngularEqualsCtrl = $controller('AngularEqualsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
