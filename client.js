var myApp = angular.module('myApp', []);

myApp.controller('GreetController', function($scope){
    $scope.person = '';
    $scope.message = '';

    $scope.greetPerson = function (personToGreet) {
        $scope.message = 'Hello ' + personToGreet + '!';
    }
});