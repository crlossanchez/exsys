'use strict';

describe('Controller: ProfileCtrCtrl', function () {

  // load the controller's module
  beforeEach(module('exsysApp'));

  var ProfileCtrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfileCtrCtrl = $controller('ProfileCtrCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProfileCtrCtrl.awesomeThings.length).toBe(3);
  });
});
