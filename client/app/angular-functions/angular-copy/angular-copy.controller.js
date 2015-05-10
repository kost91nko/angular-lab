'use strict'

angular.module('angularLabApp')
	.controller('AngularCopyCtrl', ["$scope", function ($scope) {
		$scope.stableValue = {
			name: "Vasya",
			hello: function(){
				console.log("Hello! I'm " + this.name);
			}
		}

		$scope.headValue = angular.copy($scope.stableValue);

		$scope.updateStable = function(){
			angular.copy($scope.headValue, $scope.stableValue)
		}
	}]);