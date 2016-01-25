/**
 * Created by Tigjer on 1/19/16.
 */
angular.module('app')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/items', { controller: 'ItemsCtrl', templateUrl: 'items.html' })
            .when('/register', { controller: 'RegisterCtrl', templateUrl:'register.html' })
            .when('/', { controller: 'LoginCtrl', templateUrl: 'login.html' })
    })