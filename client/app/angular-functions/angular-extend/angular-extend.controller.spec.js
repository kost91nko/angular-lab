'use strict';

describe('Controller: AngularExtendCtrl', function () {

  // load the controller's module
  beforeEach(module('angularLabApp'));

  var AngularExtendCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AngularExtendCtrl = $controller('AngularExtendCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
