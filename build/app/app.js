// $.material.init();
var app = angular.module('app', [])
  //$scope содержит данные модели. Это связующее звено между контроллером и видом.
  //$scope всего лишь один из сервисов, внедренных в контроллер.
app.controller('ListCtrl', function ListCtrl($scope) {

          $scope.items = [
                { name: "ng-blur", apply: "Атрибут, класс", description: "Дает возможность AngularJS обработать событие blur которое срабатывает когда элемент теряет фокус" },
                { name: "ng-change", apply: "Атрибут, класс", description: "Дает возможность AngularJS обработать событие change которое срабатывает когда в элементе формы меняется значение" },
                { name: "ng-click", apply: "Атрибут, класс", description: "Дает возможность AngularJS обработать событие click которое срабатывает когда выполняется клик на элементе" },
                { name: "ng-copy", apply: "Атрибут, класс", description: "Дает возможность AngularJS обработать событие copy которое срабатывает при копировании" },
                { name: "ng-cut", apply: "Атрибут, класс", description: "Дает возможность AngularJS обработать событие cut которое срабатывает при вырезании" },
                { name: "ng-paste", apply: "Атрибут, класс", description: "Дает возможность AngularJS обработать событие paste которое срабатывает при вставке" },
                { name: "ng-dblclick", apply: "Атрибут, класс", description: "Дает возможность AngularJS обработать событие dblclick которое срабатывает при двойном клике по элементу" },
                { name: "ng-focus", apply: "Атрибут, класс", description: "Дает возможность AngularJS обработать событие focus которое срабатывает когда элемент получает фокус" },
                { name: "ng-keydown", apply: "Атрибут, класс", description: "Дает возможность AngularJS обработать событие keydown которое срабатывает когда клавиша опущена" },
                { name: "ng-keypress", apply: "Атрибут, класс", description: "Дает возможность AngularJS обработать событие keypress которое срабатывает после keydown" },
                { name: "ng-keyup", apply: "Атрибут, класс", description: "Дает возможность AngularJS обработать событие keyup которое срабатывает когда клавиша отпущена" },
                { name: "ng-mousedown", apply: "Атрибут, класс", description: "Дает возможность AngularJS обработать событие mouse-down которое срабатывает когда кнопка мыши нажата" },
                { name: "ng-mouseenter", apply: "Атрибут, класс", description: "Дает возможность AngularJS обработать событие mouse-enter которое срабатывает когда курсор попадает в определенную область" },
                { name: "ng-mouseleave", apply: "Атрибут, класс", description: "Дает возможность AngularJS обработать событие mouse-leave которое срабатывает когда курсор покидает область" },
                { name: "ng-mousemove", apply: "Атрибут, класс", description: "Дает возможность AngularJS обработать событие mouse-move которое срабатывает когда двигается курсор" },
                { name: "ng-mouseup", apply: "Атрибут, класс", description: "Дает возможность AngularJS обработать событие mouse-up которое срабатывает когда клавиша мыши отпущена" },
                { name: "ng-submit", apply: "Атрибут, класс", description: "Дает возможность AngularJS обработать событие submit которое срабатывает когда в элементе form была нажата кнопка Submit" }
            ]
        });



