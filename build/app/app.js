// $.material.init();
var app = angular.module('app', [])
  //$scope содержит данные модели. Это связующее звено между контроллером и видом.
  //$scope всего лишь один из сервисов, внедренных в контроллер.
app.controller('ListCtrl', function ListCtrl($scope) {
  $scope.addNewUser = function (userDetails) {
    if (myForm.$valid) {
      $scope.message = "Name: " + userDetails.name + " Email: " + userDetails.email;
    } else {
      $scope.showValidation = true;
    }
  };
  $scope.message = "Ready";
  $scope.getError = function (error) {
      if (angular.isDefined(error)) {
          //объект который здесь ожидается получить - error но он будет сформирован только тогда когда будет допущена хотя бы одна ошибка валидации,
          //а пока их нет он undefined и для того чтобы избежать ошибки нужно использовать проверку
          if (error.required) {
              return "Please enter a value";
          } else if (error.email) {
              return "Please enter a valid email address";
          }
      }
  };

//в данном примере для упрощения реализации вспомогательных сообщений об ошибках логика формирования текста ошибки
//вынесена в отдельный метод так как для многих элементов управления текст ошибки будет похож то
//нет смысла дублировать его в каждом элементе разметки
});
// isDefined - Определяет, является ли значение определенным.



