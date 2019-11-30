(function(){
  'use strict';

  angular.module('NestedRouterApp').controller('itemsController',itemsController);

  itemsController.$inject=['list'];
  function itemsController(list){
    var $ctrl=this;
    $ctrl.listofitems=list;
  }
})();
