(function(){
  'use strict';

  angular.module('NestedRouterApp').controller('categoriesController',categoriesController);

  categoriesController.$inject=['categoriesnote','categorylist'];
  function categoriesController(categoriesnote,categorylist){
    var $ctrl=this;
    $ctrl.categoriesNote=categoriesnote;
    $ctrl.categorylist=categorylist;
  }
})();
