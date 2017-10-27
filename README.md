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


## controller as

The `controller as` syntax attaches properties and functions to an object that is shared between the controller and HTML. In this case, we're calling that object `greet`. We must use `<div ng-controller="GreetController as greet">` when referencing our controller in the HTML.

```JavaScript
var myApp = angular.module('myApp', []);

myApp.controller('GreetController', function(){
    var greet = this;
    greet.person = '';
    greet.message = '';

    greet.greetPerson = function (personToGreet) {
        greet.message = 'Hello ' + personToGreet + '!';
    }
});
```