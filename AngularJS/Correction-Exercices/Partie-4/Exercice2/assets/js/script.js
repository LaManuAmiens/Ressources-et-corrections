var app = angular.module('app', []);

app.controller('carCtrl', function($scope, $http) {
    $http.get('assets/js/voiture.json').then(function(res){
        $scope.cars = res.data;
    });
});
