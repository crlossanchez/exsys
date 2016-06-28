'use strict';

describe('Directive: toolbar.dir', function () {

  // load the directive's module
  beforeEach(module('exsysApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<toolbar.dir></toolbar.dir>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the toolbar.dir directive');
  }));
});
