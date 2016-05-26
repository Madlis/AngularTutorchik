// $.material.init();
var app = angular.module('app', [])
  //$scope содержит данные модели. Это связующее звено между контроллером и видом.
  //$scope всего лишь один из сервисов, внедренных в контроллер.
app.controller('ListCtrl', function ListCtrl($scope) {
  $scope.addNewUser = function (userDetails) {
        $scope.message = "Name: " + userDetails.name + " Email: " + userDetails.email ;
        console.log(user);
  }
  $scope.message = "Ready";
});




