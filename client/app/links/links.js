angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.getLinks = function(){
    Links.get().success(function(response) {
      console.log(response);
      $scope.data.links = response;
    });
  };








  $scope.getLinks();
});
