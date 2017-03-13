angular
  .module ('app')
  .controller('HomeController', HomeController);

  function HomeController(){

    var vm = this;
    vm.list = [{todoItem:'', priority:'', done:false}]
    //add input to a list upon clicking Add...
    vm.add = function(){
      vm.list.push({task:vm.input, priority:''});
      vm.input = '';
    }
    //assign value based on Select Item

  }
