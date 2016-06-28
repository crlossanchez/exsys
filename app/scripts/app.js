'use strict';

/**
 * @ngdoc overview
 * @name exsysApp
 * @description
 * # exsysApp
 *
 * Main module of the application.
 */
angular
  .module('exsysApp', ['auth0', 'angular-storage', 'angular-jwt','ngMaterial','ui.router'])
  .config(function($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider){

    authProvider.init({
                        domain:'angularjsoauth.auth0.com',
                        clientID:'i3sWJipIqjZJE3Mfax1zrLbH0oPGwG3V'
    });

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state( 'home',    { url:'/home',
                 templateUrl: '/views/home.tpl.html'
      })
      .state( 'profile', { url: '/profile',
                 templateUrl: '/views/profile.tpl.html',
                 controller: 'profileController as user'
      });

    jwtInterceptorProvider.tokenGetter = function(store){
      return store.get('token');
    };

    function redirect($q, $injector, $timeout, store, $location){
      var auth;
      $timeout(function(){
         auth = $injector.get('auth');
      });
      return{
         responseError: function(rejection){
            if(rejection.status === 401){
               auth.signout();
               store.remove('profile');
               store.remove('token');
               $location.path('/home');
            }
            return $q.reject(rejection);
         }
      };
    }

    $provide.factory('redirect', redirect);
    $httpProvider.interceptors.push('jwtInterceptor');
    $httpProvider.interceptors.push('redirect');

}).run(function($rootScope, $state, auth, store, jwtHelper, $location){
   $rootScope.$on('$locationChangeStart', function(){
      var token = store.get('token');
      if(token){
         if(!jwtHelper.isTokenExpired(token)){
            if(!auth.isAuthenticated){
               auth.authenticate(store.get('profile'), token);
            }
         }
      }
      if(!auth.isAuthenticated){
         $location.path('/home');
      }
   });
});
