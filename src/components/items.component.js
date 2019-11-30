(function() {
  'use strict';
  angular.module('NestedRouterApp').component('itemsComponent',{
    templateUrl:'src/templates/item.template.html',
    bindings:{
      ilist:'<'
    }
  });
})();
