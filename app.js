var app = angular.module("app",[]);

app.controller("main", ["$http", "$scope", function($http, $scope) {  

$http.get('http://apis.is/flight?language=en&type=departures').then(function(flights) {
      $scope.dep = flights.data.results;
    }, function(flights) {
      $scope.dep = flights;
});
  
$http.get('http://apis.is/flight?language=en&type=arrivals').then(function(flights) {
      $scope.arv = flights.data.results;
    }, function(flights) {
      $scope.arv = flights;
});

}]);