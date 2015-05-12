angular.module('angularLabApp')
	.controller('AngularElementCtrl', function($scope){
		$scope.message = "Hello";
		$scope.otherMsg = "Bonjour";

		var targetElement = angular.element('#target-element');
		targetElement.css('color','red');
		var injectorTargetElement = targetElement.injector();
		var scope = targetElement.scope();
		targetElement.html('Bonjour');

		targetElement.on('$destroy', function(){
			alert('element was deleted');
		});

		targetElement.remove();
		
		console.log(scope);
	})