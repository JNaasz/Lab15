

var app = angular.module('myModule');

app.factory('myService', function() {

var obj = {};
var holder;

obj.getWords =  function(words) {
  holder = words;
};


obj.giveWords = function() {
  return holder;
};

return obj;

});
