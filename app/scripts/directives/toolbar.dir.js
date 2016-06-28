'use strict';

/**
 * @ngdoc directive
 * @name exsysApp.directive:toolbar.dir
 * @description
 * # toolbar.dir
 */
angular.module('exsysApp')
  .directive('toolbar.dir', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the toolbar.dir directive');
      }
    };
  });
