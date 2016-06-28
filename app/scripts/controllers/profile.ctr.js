

	'use strict';

	/**
	 * @ngdoc function
	 * @name exsysApp.controller:ProfileController
	 * @description
	 * # ProfileController
	 * Controller of the exsysApp
	 */
	angular
	   .module('exsysApp')
  	   .controller('profileController', function($http){
		var vm = this;
		vm.message = 'Hello';
	});
