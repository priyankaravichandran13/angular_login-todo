var app = angular.module('myapp',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
$routeProvider
	.when('/login',{
		templateUrl: '/loginpagecontroller.html'
	})
	.when('/dashboad',{
		resolve: {
			"check": function($location, $rootScope){
			if(!$rootScope.loggedIn) {
				$location.path('/login');

			}
		  }
		},
		templateUrl: '/dashboadpage.html'
	})
	.otherwise({
		redirectTo: '/login'
	});

}]);
app.controller('mycontroller',function($scope ,$location,$rootScope){

	$scope.submit = function(){
		if($scope.username == 'admin' && $scope.password == 'admin'){
			$rootScope.loggedIn = true;
			$location.path('/dashboad');

		}
		else{
		     alert('wrong stuff');
			}
	};

});