angular.module('mainModule', [])

.controller('mainController', function($scope, $location) {
    $location.path('/dashboard');
});    
