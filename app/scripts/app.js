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
  });
