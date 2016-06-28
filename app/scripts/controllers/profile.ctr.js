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
  	   .controller('profileController', function($http, store){
		var vm = this;
		vm.getMessage = function(){
								$http.get('http://localhost:3001/api/public', {
															skipAuthorization: true
															}).then(function(response){
																	vm.message = response.data.message;
																	  });
		};
		vm.getSecretMessage = function(){
								$http.get('http://localhost:3001/api/private').then(function(response){
									vm.message = response.data.message;
								});
		};
		//vm.message;
		vm.profile = store.get('profile');
	});
