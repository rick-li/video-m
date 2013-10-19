angular.module('extApp', ['ngResource', 'ngMobile','angular-carousel']);

var app = angular.module('extApp');

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
   		when('/', {
   			templateUrl: 'partials/main.html'
   		}).
      when('/menu1', {
        templateUrl: 'partials/menu1.html',
        controller: 'ContentCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);


app.controller('MenuCtrl', function($scope) {
	$scope.hello = function() {
		console.log('hello');
	};

	$scope.toggleSidebar = function() {
		console.log('toggle side')
		$('body').toggleClass('sp-expand')
	};
});


app.controller('ContentCtrl', function() {


});