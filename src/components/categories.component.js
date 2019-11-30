(function() {
  'use strict';
  angular.module('NestedRouterApp').component('categoriesComponent',{
    templateUrl:'src/templates/categories.template.html',
    bindings:{
      catwelcomeheading:'<',
      catlist:'<'
    }
  });
})();
