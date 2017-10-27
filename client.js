var myApp = angular.module('myApp', []);

myApp.controller('GreetController', function(){
    var greet = this;
    greet.person = '';
    greet.message = '';

    greet.greetPerson = function (personToGreet) {
        greet.message = 'Hello ' + personToGreet + '!';
    }
});