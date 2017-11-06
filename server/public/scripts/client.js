var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
    $routeProvider.when('/messages', {
        controller: 'messageController as message'

    })
});