'use strict';

angular.module('angularLabApp')
  .controller('AngularExtendCtrl', function ($scope) {
    $scope.src = {
      name: "Vasya",
      age: 25,
      weight: 80
    };

    $scope.src2 = {
      weight: 85,
      address: "Machulishi Molodeznaya",
      phone: "214-57-16"
    };

    var resultObject = angular.extend({}, $scope.src, $scope.src2);

    console.log(angular.toJson($scope.src));
    console.log(angular.toJson($scope.src2));
    console.log(angular.toJson(resultObject));

    function transformer(transformationFn, value) {
      return (transformationFn || angular.identity)(value);
    }

    function simpleFn(name){
      return name + ", Vasek";
    }

    var simpleF = null;

    console.log("Test angular identity");
    console.log(transformer(simpleF, "Hello"));

  });
