angular.module('routeModule', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/static/partials/home.html',
            controller: 'mainController',
        })
        .when('/login', {
            templateUrl: '/static/partials/login.html',
            controller: 'loginController',
        })
        .when('/dashboard', {
            templateUrl: '/static/partials/dashboard.html',
            controller: 'dashboardController',
        })
        .when('/logout', {
            controller: 'logoutController',
        })
    //$locationProvider.html5Mode(true);
});
