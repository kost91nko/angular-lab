'use strict';

angular.module('angularLabApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('angular-functions', {
        url: '/angular-functions',
        templateUrl: 'app/angular-functions/angular-functions.html',
        controller: 'AngularFunctionsCtrl'
      })
      .state('angular-bind',{
        url: '/angular-bind',
        templateUrl: 'app/angular-functions/angular-bind/angular-bind.html',
        controller: 'AngularBindCtrl'
      })
      .state('angular-copy',{
      	url: '/angular-copy',
      	templateUrl: 'app/angular-functions/angular-copy/angular-copy.html',
      	controller: 'AngularCopyCtrl'
      })
      .state('angular-element', {
        url: '/angular-element',
        templateUrl: 'app/angular-functions/angular-element/angular-element.html',
        controller: 'AngularElementCtrl'
      });
  });