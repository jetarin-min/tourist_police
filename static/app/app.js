angular.module('app',
    ['ngCookies',
    'ngRoute',
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
}])
.run(function ($cookies, $location) {
    var user_id = $cookies.get('user_id');
    if (!user_id){
        $location.path('/login');
    }
});
