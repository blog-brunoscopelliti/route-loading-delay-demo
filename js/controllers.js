'use strict';

var ctrl = angular.module('myApp.controllers', []);

ctrl.controller('AutoCtrl', ['$scope', function($scope) {}]);


ctrl.controller('LibraryCtrl', ['$scope', 'books', 'movies', function($scope, books, movies) {
	$scope.books = books.data;
	$scope.movies = movies.data;
}]);
