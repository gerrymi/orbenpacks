var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.
        when('/', {templateUrl: '/dist/angular/views/home.html', controller: 'MainController'}).
        when('/products/:id', {templateUrl: '/dist/angular/views/product.html', controller: 'ProductController'}).
        otherwise({ redirectTo: '/' });
});
