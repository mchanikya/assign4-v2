(function(){
  'use strict';
  angular.module('NestedRouterApp').service('fetchDetails',fetchDetails);

  fetchDetails.$inject=['$http','$q','$timeout'];
  function fetchDetails($http,$q,$timeout){
    var service=this;

    service.getCategoriesNote=function() {
      var deferred=$q.defer();
      $timeout(
        function(){
          deferred.resolve('Welcome to Categories');
        },800);
      return deferred.promise;
    };

    service.getWelcomeNote=function(){
      return 'Welcome to Happy Restaurant';
    };

    // service.getCategories=function(){
    //   var deferred=$q.defer();
    //   $timeout(
    //     function(){
    //       deferred.resolve('Categories listing');
    //     },800);
    //   return deferred.promise;
    // };

    service.getCategories=function(){
      var resolve=$http({
        method:'GET',
        url:'https://davids-restaurant.herokuapp.com/categories.json'
      });
      return resolve;
    };

    service.getItems=function (shortName) {
      var response = $http({
        method: "GET",
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
        params: {
          category: shortName
        }
      });
      return response;
    };
  }
})();
