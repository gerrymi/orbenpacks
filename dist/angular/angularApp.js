var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.
        when('/', {templateUrl: '/dist/angular/views/home.html', controller: 'MainController'}).
        when('/promo', {templateUrl: '/dist/angular/views/promo.html', controller: 'PromoController'}).
        when('/products', {templateUrl: '/dist/angular/views/products.html', controller: 'MainController'}).
        when('/products/:id', {templateUrl: '/dist/angular/views/product.html', controller: 'ProductController'}).
        otherwise({ redirectTo: '/' });
});

app.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src != attrs.errSrc) {
          attrs.$set('class', 'hide');
        }
      });
    }
  }
});

