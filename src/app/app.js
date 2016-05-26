// $.material.init();
var app = angular.module('app', [])
  //$scope содержит данные модели. Это связующее звено между контроллером и видом.
  //$scope всего лишь один из сервисов, внедренных в контроллер.
app.controller('ListCtrl', function ListCtrl($scope) {
  $scope.dataValue = false;
})


// apply - он позволяет выполнить какую-то функцию на объекте
// var a = { name: 'qwe'};

// function test () {
//   alert(this.name);
// }
// test(); - приведет к ошибке в виндов нету
// test.apply(a, name) - название оъекта к которому хотим применить и аргумент


