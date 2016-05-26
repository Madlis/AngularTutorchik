// $.material.init();
var app = angular.module('app', [])
  //$scope содержит данные модели. Это связующее звено между контроллером и видом.
  //$scope всего лишь один из сервисов, внедренных в контроллер.
app.controller('ListCtrl', function ListCtrl($scope) {
  $scope.requireValue = true;
  $scope.matchPattern = new RegExp("^[a-z]");
});
// isDefined - Определяет, является ли значение определенным.
  // ng-model="string"
  // [name="string"]
  // [required="string"]
  // [ng-required="boolean"]
  // [ng-minlength="number"]
  // [ng-maxlength="number"]
  // [ng-pattern="string"]
  // [ng-change="string"]
  // [ng-trim="boolean"]>


