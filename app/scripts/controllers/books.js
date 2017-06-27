/**
 * Created by AKSHAY DALAL on 23-May-17.
 */




app.controller('booksController', function ($scope,$http,$location,$routeParams) {
  // $scope.ifd=Math.random();

$scope.getBooks= function () {

  $http.get('http://localhost:3001/api/books')
    .then(function (response) {
      $scope.books=response.data;
    })
    .catch(function (error) {

    })
}

  $scope.getBook= function () {
  var id=$routeParams.id;
    $http.get('http://localhost:3001/api/books/'+id)
      .then(function (response) {
        $scope.book=response.data;
      })
      .catch(function (error) {

      })
  }

  $scope.addBook= function () {
     $http.post('http://localhost:3001/api/books',$scope.book)
      .then(function (response) {
        window.location.href='#/books';
      })
      .catch(function (error) {

      })
  }
  $scope.updateBook= function () {
  console.log($scope.book);
    var id=$routeParams.id;
    $http.put('http://localhost:3001/api/books/' + id, $scope.book)
      .then(function (response) {
        window.location.href='#/books';
      })
      .catch(function (error) {

      })
  }

  $scope.deleteBook= function (id) {

    $http.delete('http://localhost:3001/api/books/' + id)
      .then(function (response) {
        window.location.href='#/books';
      })
      .catch(function (error) {

      })
  }
});
