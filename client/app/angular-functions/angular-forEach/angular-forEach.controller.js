'use strict';

angular.module('angularLabApp')
  .controller('AngularForEachCtrl', function ($scope) {
    $scope.arr1 = [
      {
        'name': 'angular.copy',
        'path': 'angular-copy',
        'notAtOption': false,
        'section': 'ng:function'
      },
      {
        'name': 'angular.bind',
        'path': 'angular-bind',
        'notAtOption': true,
        'section': 'ng:function'
      },
      {
        'name': 'ngOptions',
        'path': 'ng-options',
        'notAtOption': true,
        'section': 'ng:directive'
      },
      {
        'name': 'angular.element',
        'path': 'angular-element',
        'notAtOption': false,
        'section': 'ng:function'
      },
      {
        'name': 'angular.equals',
        'path': 'angular-equals',
        'notAtOption': false,
        'section': 'ng:function'
      },
      {
        'name': 'angular.forEach',
        'path': 'angular-forEach',
        'notAtOption': false,
        'section': 'ng:function'
      }];

    $scope.obj1 = {
      'name': 'angular.copy',
      'path': 'angular-copy',
      'notAtOption': false,
      'section': 'ng:function',
      'und': undefined
    };

    var objContext = {
      param: "pam pam"
    };

    angular.forEach($scope.obj1, function(val, key){
      console.log("Key:" + key + " Val:" + val);
    });

    angular.forEach($scope.arr1, function iterator(value, key, obj){
     console.log(" Key: " + key + " Value: " + angular.toJson(value) + " Current Obj Name: " +
      obj[key].name + " Context param " + this.param);
    },objContext);

    var dateObj = new Date();
    $scope.dateJson = angular.toJson(dateObj, $scope.pretty);

    var num = 666;
    $scope.numberJson = angular.toJson(num, $scope.pretty);

    var str = "hello";
    $scope.stringJson = angular.toJson(str, $scope.pretty);

    $scope.arrayJson = angular.toJson($scope.arr1, $scope.pretty);

    $scope.pretty = false;

  });
