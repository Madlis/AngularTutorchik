// $.material.init();
var app = angular.module('app', [])
  //$scope содержит данные модели. Это связующее звено между контроллером и видом.
  //$scope всего лишь один из сервисов, внедренных в контроллер.
app.controller('ListCtrl', function ListCtrl($scope) {

  $scope.tasks = [
        { action: "Buy flowers", complete: false },
        { action: "Go to gym", complete: false },
        { action: "Buy snickers", complete: true },
        { action: "Buy notebook", complete: false },
        { action: "Call friends", complete: false },
        { action: "Go to cinema", complete: false },
        { action: "Buy Big-Mac", complete: true },
        { action: "Buy a book", complete: false },
        { action: "Call mom", complete: false }
    ];
})


