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
    $http({method: 'GET', url: '/posts.json'}).
    then(function(response) {
      var status = response.status;
      
      angular.copy(response.data, o.posts);
    });
  };

  return o;

}]);