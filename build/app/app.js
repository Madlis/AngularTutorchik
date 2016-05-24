// $.material.init();
var app = angular.module('app', [])
  //$scope содержит данные модели. Это связующее звено между контроллером и видом.
  //$scope всего лишь один из сервисов, внедренных в контроллер.
app.controller('ListCtrl', function ListCtrl($scope) {

  // Мы создали модель с двумя делами в списке. Обратите внимание, что вашей модели нужно просто присвоить $scope
  //и AngularJS отразит состояние в пользовательском интерфейсе самостоятельно. Модель данных это старый-добрый объект JavaScript, который не нужно чем либо оборачивать или изменять свойства через специальные сеттеры.
  $scope.items = [
    { text: 'Chocolate', done: true },
    { text: 'Water', done: false },
    { text: 'Bred', done: true },
    { text: 'Banana', done: false }
  ];

  $scope.addItem = function () {

    $scope.items.push({ text: $scope.itemText, done: false });
    //Неизменяемый метод Array.push. Его вызов обновляет модель, которая затем обновляет вид посредством связывания данных.
    //ng-repeat связан с этим массивом. Он автоматически проходится по массиву и добавляет новый DOM-элемент в вид. 

    // $scope.itemText Из-за двунаправленного связывания данных модель всегда находится в актуальном состоянии. Это означает, что мы можем запросто читать состояние 
    //пользовательского ввода. Нет необходимости регистрировать колбэки, обработчики событий или зависимости из API фреймворка.
    $scope.itemText = '';
    //Записать в текстовое поле пустой строки
  };

  // Вычисляем количество оставшихся покупок.
  $scope.remain = function () {
      var count = 0;

      // angular.forEach(...) - вызывает функцию iterator для каждого элемента коллекции obj, которая может быть объектом или массивом. Функция iterator вызывается как iterator(value, key), где value это значение текущего свойства объекта или элемент массива, и key это имя свойства в объекте или индекс элемента в массиве.

      angular.forEach($scope.items, function(item) {
          count += item.done;
      });
      return count;
  };
})



