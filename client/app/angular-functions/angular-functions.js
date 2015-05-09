'use strict';

angular.module('angularLabApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('angular-functions', {
        url: '/angular-functions',
        templateUrl: 'app/angular-functions/angular-functions.html',
        controller: 'AngularFunctionsCtrl'
      });
  });