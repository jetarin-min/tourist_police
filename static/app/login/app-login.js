angular.module('app', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: '/static/app/login/login.html',
        controller: 'loginController'
    });
}])
.controller('loginController', function($scope) {
    $scope.login = function() {
        alert($scope.username);
    }
})
