(function(){
  'use strict';
    angular.module('NestedRouterApp')
  .config(RoutesConfig);

  RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('/',{
      url:'/',
      templateUrl:'src/templates/main.home.template.html',
      controller:'homeController as hCtrl',
      resolve:{
        welcomenote:['fetchDetails',function(fetchDetails){
          return fetchDetails.getWelcomeNote();
        }]
      }
    })
    .state('categories',{
      url:'/categories',
      templateUrl:'src/templates/main.categories.template.html',
      controller:'categoriesController as cCtrl',
      resolve:{
        categoriesnote:['fetchDetails',function(fetchDetails){
          return fetchDetails.getCategoriesNote();
        }],
        categorylist:['fetchDetails',function(fetchDetails){
          return fetchDetails.getCategories();
        }]
      }
    }).state('hello',{
      url:'/items/{itemId}',
      templateUrl:'src/templates/main.items.template.html',
      controller:'itemsController as iCtrl',
      resolve:{
        list:['fetchDetails','$stateParams',function(fetchDetails,$stateParams){
            return fetchDetails.getItems($stateParams.itemId);
        }]
      }
    });
  }

})();
