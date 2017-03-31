(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['todoFactory'];

    /* @ngInject */
    function HomeController(todoFactory) {
      //define variables
      var vm = this;
      vm.list = [];
      vm.priorities = [
        {label: "Get'er Done", level:3, style:'list-group-item list-group-item-danger'},
        {label: 'You Can Do It', level:2, style:'list-group-item list-group-item-warning'},
        {label: 'Fugged About It',  level:1, style:'list-group-item list-group-item-info'}
      ];

      //add input to a list upon clicking Add...
      vm.add = function(){
        todoFactory
        .create({
          task:vm.input,
          priority:vm.priority.level
        })
        .then(function(data){
          vm.list.push(data);
        });
      }

      vm.getColor = function(todoItem) {
        switch(todoItem.priority) {
          case 1: return 'list-group-item list-group-item-info'
          case 2: return 'list-group-item list-group-item-warning'
          case 3: return 'list-group-item list-group-item-danger'
        }
      }

      //order by highest priority
      vm.highPri = function(){
        vm.sort = "-priority";
      }
      //order by lowest priority
      vm.lowPri = function(){
        vm.sort = "priority";
      }
      //order by alphabetical
      vm.az = function(){
        vm.sort = "task";
      }

      //delete based on count
      vm.remove = function (todoItem){
        todoFactory
          .remove(todoItem.todoItemId)
          .then(function(){
            var index = vm.list.indexOf(todoItem);
            vm.list.splice(index, 1);
          });
      }

      activate();

      function activate(){
        todoFactory
          .getAll()
          .then(function(data){
            vm.list = data;
          });
      }

    }
})();
