'use strict';

angular.module('angularLabApp')
  .controller('NavbarCtrl', function ($scope, $location, filterFilter, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.angularFunctions = [
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
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.selectedAngularFunction = filterFilter($scope.angularFunctions, {path: $location.path()});

    var indexPath = _.findIndex($scope.angularFunctions, function(chr) {
      var path = $location.path();
      return chr.path == path.substr(1);
    });

    $scope.selectedAngularFunction = $scope.angularFunctions[indexPath];

    $scope.$watch('selectedAngularFunction', function(newValue, oldValue){
      if(newValue && (!oldValue || oldValue.path != newValue.path)){
        var newPath = '/' + newValue.path;
        console.log('Change location to ' + newPath);
        $location.path(newPath); 
      }
    });

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });