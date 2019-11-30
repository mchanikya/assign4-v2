(function(){
  'use strict';

  angular.module('NestedRouterApp').controller('homeController',homeController);

  homeController.$inject=['welcomenote'];
  function homeController(welcomenote){
    var $ctrl=this;
    $ctrl.homeNote=welcomenote;
  }
})();
