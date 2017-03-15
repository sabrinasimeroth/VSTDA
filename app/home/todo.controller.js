angular
  .module ('app')
  .controller('HomeController', HomeController);

  function HomeController(){
    //define variables
    var vm = this;
    vm.list = [];
    vm.priorities = [
      ["Get'er Done", 3, 'list-group-item list-group-item-danger'],
      ['You Can Do It', 2, 'list-group-item list-group-item-warning'],
      ['Fugged About It', 1, 'list-group-item list-group-item-info']
    ];
    vm.count = 0;

    //add input to a list upon clicking Add...
    vm.add = function(){
      vm.list.push({task:vm.input, priority:vm.priority[1], count:vm.count++, style:vm.priority[2]});
      vm.input = '';
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
    vm.remove = function(todoItem){
      var index = vm.list.indexOf(todoItem);
      vm.list.splice(index, 1)
    }
  }
