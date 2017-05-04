(function() {

var app = angular.module('myModule');


app.controller('resultController', function($scope, myService){

  $scope.obj = myService.giveWords();
})




})();
