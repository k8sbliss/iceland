var app = angular.module('app', ['ngTable']);
app.controller('main', ['$scope', '$http','ngTableParams' ,
    function ($scope, $http, ngTableParams) {
    tableDataDep = [];
    tableDataArv = [];
    //Table configuration
    $scope.tableParamsD = new ngTableParams({
        page: 1,
        count: 5
    },{
        total:tableDataDep.length,
        //Returns the data for rendering
        getData : function($defer,params){
            $http.get('http://apis.is/flight?language=en&type=departures').then(function(response) {
                tableDataDep = response.data.results;
                $defer.resolve(tableDataDep.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                params.total(tableDataDep.length);
            });
        }
    });
   $scope.tableParamsA = new ngTableParams({
        page: 1,
        count: 5
    },{
        total:tableDataArv.length,
        //Returns the data for rendering
        getData : function($defer,params){
            $http.get('http://apis.is/flight?language=en&type=arrivals').then(function(response) {
                tableDataArv = response.data.results;
                $defer.resolve(tableDataArv.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                params.total(tableDataArv.length);
            });
        }
    });
}]);