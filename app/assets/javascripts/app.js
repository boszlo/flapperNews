angular.module('flapperNews', ['ui.router', 'templates'])
.config([
'$stateProvider',
'$urlRouterProvider',
'$qProvider',
function($stateProvider, $urlRouterProvider, $qProvider) {

  $qProvider.errorOnUnhandledRejections(false);

  $stateProvider.state('posts', {
    url: '/posts/{id}',
    templateUrl: 'posts/_posts.html',
    controller: 'PostsCtrl'
  });
  
  $stateProvider.state('home', {
    resolve: {
      postPromise: ['posts', function(posts){
        return posts.getAll();
      }]
    },
    url: '/home',
    templateUrl: 'home/_home.html',
    controller: 'MainCtrl'
  });

  $urlRouterProvider.otherwise( function($injector, $location) {
        var $state = $injector.get("$state");
        $state.go("home");
    });
  
 // $urlRouterProvider.otherwise('home');
}]);
