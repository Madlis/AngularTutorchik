// $.material.init();
var app = angular.module('app', [])
  //$scope содержит данные модели. Это связующее звено между контроллером и видом.
  //$scope всего лишь один из сервисов, внедренных в контроллер.
app.controller('contriesCtrl', function contriesCtrl($scope) {

  $scope.contries = [{
      name: 'Russia',
      area: '603 628',
      population: '42 825 883',
      capital: {
          name: 'Kiev'
      }
  },
  {
      name: 'Canada',
      area: '9 984 670',
      population: '34 568 211',
      capital: {
          name: 'Ottava'
      }
  }];

})



