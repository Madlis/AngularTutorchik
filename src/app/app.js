// $.material.init();
var app = angular.module('app', [])
  //$scope содержит данные модели. Это связующее звено между контроллером и видом.
  //$scope всего лишь один из сервисов, внедренных в контроллер.
app.controller('contryCtrl',contryCtrl)
function contryCtrl($scope) {
  $scope.contry = {
    name: 'Russia',
    area: '606.400',
    population: '42 625 583',
    capital: {
      name : 'Moskov'
    }
  }
}
