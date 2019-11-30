(function() {
  'use strict';
  angular.module('NestedRouterApp').component('homeComponent',{
    templateUrl:'src/templates/home.template.html',
    bindings:{
      welcomeheading:'<'
    }
  });
})();
