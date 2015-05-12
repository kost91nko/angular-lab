'use strict';

angular.module('angularLabApp')
  .controller('AngularEqualsCtrl', function ($scope) {
  	$scope.regex1 = /[a-c]{3}/;
  	$scope.regex2 = /abc/;

  	$scope.obj1 = {
  		name: "Vasya",
  		hello: function(){
  			console.log("Hello I'm " + this.name);
  		}
  	};

   	$scope.obj2 = {
  		name: "Vasya",
  		hello: function(){
  			console.log("Whatever I'm " + this.name);
  		}
  	};

    $scope.equalsRegexResult = angular.equals($scope.regex1, $scope.regex2);
    $scope.objectsEqualsResult = angular.equals($scope.obj1, $scope.obj2);

    console.log("Regex comparsion result: " + $scope.equalsRegexResult);
    console.log("Objects comparsion result: " + $scope.objectsEqualsResult);
  });
