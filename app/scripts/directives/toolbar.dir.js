'use strict';

	/**
	 * @ngdoc directive
	 * @name exsysApp.directive:toolbar
	 * @description
	 * # toolbar
	 */
angular
		.module('exsysApp')
    	.directive('toolbar', function(){
			return {
				templateUrl: '/views/toolbar.tpl.html',
				controller: function(auth, store, $location){
					var vm = this;
					vm.login = function(){
									auth.signin({}, function(profile, token){
														store.set('profile', profile);
														store.set('token', token);
														$location.path('/home');
												 }, function(error){
														console.log(error);
												});
										 };
					vm.logout = function(){
											auth.signout();
											store.remove('profile');
											store.remove('token');
											$location.path('/home');
										  };
					vm.auth = auth;

					



				},
				controllerAs: 'toolbar'
			};
		});

	

	

