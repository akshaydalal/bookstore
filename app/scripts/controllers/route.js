/**
 * Created by AKSHAY DALAL on 14-Mar-17.
 */


app.config(function($routeProvider,$locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when("/", {
      templateUrl : "views/books.html",
      controller:'booksController'
    })
    .when("/books", {
      templateUrl : "views/books.html",
      controller:'booksController'
    })
    .when("/books/details/:id", {
      templateUrl : "views/book_details.html",
      controller:'booksController'
    })
    .when("/books/add", {
      templateUrl : "views/add_book.html",
      controller:'booksController'
    })
    .when("/books/edit/:id", {
      templateUrl : "views/edit_book.html",
      controller:'booksController'
    })
    .otherwise({
      redirectTo:'/'
    })
});
