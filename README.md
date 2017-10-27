# $scope -> controller as

Converting `$scope` to `controller as` syntax.

## $scope

When using `$scope`, it must be passed into the controller function. Anything attached to `$scope` is available in the HTML for your `ng-controller`. 

```JavaScript
var myApp = angular.module('myApp', []);

myApp.controller('GreetController', function($scope){
    $scope.person = '';
    $scope.message = '';

    $scope.greetPerson = function (personToGreet) {
        $scope.message = 'Hello ' + personToGreet + '!';
    }
});
```