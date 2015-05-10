'use strict'

angular.module('angularLabApp')
	.controller('AngularBindCtrl', ['$scope', '$window', function ($scope, $window) {
		var fnObj = {
	    	name: "Vasya"
	    };
	    var bindFunc = angular.bind(fnObj, function () {
	    	$window.alert("Hello " + this.name + " " + arguments[0]);
	    }, "Nice to meet you");

	    $scope.showBind = bindFunc;
	}]);