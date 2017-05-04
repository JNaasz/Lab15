(function() {


var app = angular.module('myModule');

app.controller("inputController", function($scope, myService, $location) {

$scope.obj = {};

$scope.submit = function() {
  myService.getWords($scope.obj);
  console.log($scope.obj);
  $location.path('/display');
};

});









})();
