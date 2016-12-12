angular.module('flapperNews').factory('posts', ['$http', function($http){
  
  var o = {
    posts: []
  };  
  
/*  o.getAll = function() {
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, o.posts);
    });
  };*/

  o.getAll = function() {
    $http({method: 'GET', url: '/posts.json'})
    .then(
      function(response) {
        angular.copy(response.data, o.posts);
      },
      function(response) {
        alert('bad response from getAll()');
      }
    );
  };

  o.create = function(post) {
    $http({method: 'POST', url: '/posts.json', data: post})
    .then(
      function(response) {
        o.posts.push(response.data);
      },
      function(response) {
        alert('POST error');
        console.log(response);
      }
    );
  };

  return o;

}]);