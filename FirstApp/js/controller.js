var app = angular.module('mainApp' ['ngRoute']);
// download angular js ngroute js on google
// use (['$routeProvider',function($routeProvider)]); if compressing your file
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            template: 'Welcome User!'

        })
        .when('/anotherPage', {
            template: 'Welcome User Again!'

        })
        .otherwise('/', {
            redirectTO: '/ '

        });
});