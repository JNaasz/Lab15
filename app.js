(function(){

var app = angular.module('myModule', ['ngRoute']);


app.config(function($routeProvider){
$routeProvider.when('/input', {
  controller: "inputController",
  templateUrl: "views/input.html"
})


.when('/display', {
  controller: "resultController",
  templateUrl: "views/display.html"
})

.otherwise({
  redirectTo: "/input"
})

}) // closes app.config





})();
