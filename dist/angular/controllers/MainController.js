app.controller('MainController', ['$scope', 'products', function($scope, products) {
  products.success(function(data) {
    $scope.products = data;
  });
}]);