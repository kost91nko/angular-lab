'use strict';

angular.module('angularLabApp')
  .controller('MyCtrl',function($scope){
    $scope.content = {
      label: "I'am new div"
    }
  })
  .controller('AngularInjectorCtrl', function ($scope) {
    var $injector = angular.injector(['ng']);

    $injector.invoke(function($rootScope, $compile, $document) {
      $compile($document)($rootScope);
      $rootScope.$digest();
    });

    var $div = $('<div ng-controller="MyCtrl">{{content.label}}</div>');
    $(document.body).append($div);

    var docElement = angular.element(document);

    var docInjector = angular.element(document).injector();
    console.log("Injector: " + docInjector);

    if(docInjector && angular.isFunction(docInjector.invoke)) {
      docInjector.invoke(function ($compile) {
        var scope = angular.element($div).scope();
        $compile($div)(scope);
      });
    }

    var a;
    var isAr = [],
      isDate = new Date("12/12/1900"),
      isDef = docElement.invoke,
      isEl = angular.element("<div>"),
      isFunc = docElement.invoke,
      isNum = -Infinity,
      isObj = "asdfasdf",
      isStr = new String("vcvc"),
      isUndef = null;

    var callback1 = function(name){ console.log(name); };
    var calculateResult = function (){ return 1 + 2;};

    function foo(callback) {
      var result = calculateResult();
      (callback || angular.noop)(result);
    }

    console.log("noop test:");
    foo();

    console.log("isArray " + isAr + ": " +  angular.isArray(isAr));
    console.log("isDate " + isDate + ": " + angular.isDate(isDate));
    console.log("isDefined " + isDef + ": "+ angular.isDefined(isDef));
    console.log("isElement " + isEl + ": " + angular.isElement(isEl));
    console.log("isFunction " + isFunc + ": " + angular.isFunction(isFunc));
    console.log("isNumber " + isNum + ": " + angular.isNumber(isNum));
    console.log("isFinite " + isNum + ": " + isFinite(isNum));
    console.log("isObject " + isObj + ": " + angular.isObject(isObj));
    console.log("isString " + isStr + ": " + angular.isString(isStr));
    console.log("isUndefined " + isUndef + ": "+ angular.isUndefined(isUndef));
  });
