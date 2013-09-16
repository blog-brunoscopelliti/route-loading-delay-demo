'use strict';

var app = angular.module('myApp', ['myApp.services', 'myApp.controllers']);

app.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/auto', {
    templateUrl: 'partials/auto.html', 
    controller: 'AutoCtrl'
  });

  $routeProvider.when('/library', {
    templateUrl: 'partials/library.html', 
    controller: 'LibraryCtrl',
    resolve: {
      books: function(srvLibrary) {
        return srvLibrary.getBooks();
      },
      movies: function(srvLibrary) {
        return srvLibrary.getMovies();
      }
    }
  });

  $routeProvider.otherwise({redirectTo: '/auto'});

}]);


app.run(['$rootScope', function($root) {

  $root.$on('$routeChangeStart', function(e, curr, prev) { 
    if (curr.$$route && curr.$$route.resolve) {
      // Show a loading message until promises are not resolved
      $root.loadingView = true;
    }
  });

  $root.$on('$routeChangeSuccess', function(e, curr, prev) { 
    // Hide loading message
    $root.loadingView = false;
  });

}]);