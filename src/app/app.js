// $.material.init();
var app = angular.module('app', [])
  //$scope содержит данные модели. Это связующее звено между контроллером и видом.
  //$scope всего лишь один из сервисов, внедренных в контроллер.
app.controller('ListCtrl', function ListCtrl($scope) {
  $scope.message = "Hover me!";
})
app.directive('tap', function (){
    return function (scope, elem, attrs) {
        elem.on("mouseenter", function () {
            //здесь используется метод jqLite on для того чтобы указать обработчик на события touchstart и touchend
            scope.$apply(attrs["tap"]);
            //scope.$apply(attrs["tap"]) используется для чтобы достать значение атрибута tap и применить его к scope
            //таким образом замещая значение свойства message
        });
        //с помощью выражения .directive можно создать пользовательскую директиву, 
        //directive принимает 2 аргумента 1й это название директивы а второй фабричная функция
        //которая возвращает функцию принимающую 3 аргумента:scope - контекст в котором будет выполнятся функция,
        //elem - это jqLite представление элемента  к которому применнеа директива и attrs - это коллекция атрибутов примененных к элементу
    }
})

// apply - он позволяет выполнить какую-то функцию на объекте
// var a = { name: 'qwe'};

// function test () {
//   alert(this.name);
// }
// test(); - приведет к ошибке в виндов нету
// test.apply(a, name) - название оъекта к которому хотим применить и аргумент


