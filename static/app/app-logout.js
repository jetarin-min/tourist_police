angular.module('logoutModule', [])

.controller('logoutController', function($scope, $location) {
    $location.path('/login');
});    
