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
      })
      .state('angular-extend', {
        url: '/angular-extend',
        templateUrl: 'app/angular-functions/angular-extend/angular-extend.html',
        controller: 'AngularExtendCtrl'
      })
      .state('angular-equals', {
        url: '/angular-equals',
        templateUrl: 'app/angular-functions/angular-equals/angular-equals.html',
        controller: 'AngularEqualsCtrl'
      })
      .state('angular-forEach', {
        url: '/angular-forEach',
        templateUrl: 'app/angular-functions/angular-forEach/angular-forEach.html',
        controller: 'AngularForEachCtrl'
      });
  });
