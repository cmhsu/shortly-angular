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

  $scope.query = '';

  $scope.search = function (item){
    if( item.title.toLowerCase().indexOf($scope.query.toLowerCase()) >= 0 
      || item.code.toLowerCase().indexOf($scope.query.toLowerCase()) >= 0
      || item.visits === +$scope.query 
      || item.url.toLowerCase().indexOf($scope.query.toLowerCase()) >= 0) {
      return true;
    }
    return false;
   };



  $scope.getLinks();
});
