app.controller('ProductController', ['$scope', 'products', '$routeParams', function($scope, products, $routeParams) {
  products.success(function(data) {
    $scope.detail = data[$routeParams.id];
  	$scope.currentId = $routeParams.id;
  });
  var IMAGE_WIDTH = 357;
  $scope.scrollTo = function(image,ind) {
      $scope.listposition = {left:(IMAGE_WIDTH * ind * -1) + "px"};
      $scope.selected = image;
  }

}]);