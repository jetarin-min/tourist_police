angular.module('app', ['ngRoute'])

.controller('dashboardController', function($scope) {
    $scope.mem_qty = 10;
    $scope.rec_qty = 30;
})    

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/dashboard', {
        templateUrl: '/static/app/dashboard/dashboard.html',
        controller: 'dashboardController'
    });
}]);
