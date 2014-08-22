(function() {
	var demo = angular.module('demo', ['ngCookies']);
	demo.controller('MainController', ['$scope','$cookieStore',
		function($scope, $cookieStore) {
			//Separate data sources are used, angularjs script <1.3-rc2 should not be used with nested arrays to prevent leaks
			$scope.data1 = $cookieStore.get('data1');
			$scope.data2 = $cookieStore.get('data2');

			if(!( $scope.data1 instanceof Array)) {
				$scope.data1 = [];
			}
			if(!( $scope.data2 instanceof Array)) {
				$scope.data2 = [];
			}
			$scope.$watchCollection('data1', function(){
				$cookieStore.put('data1', $scope.data2);
			});
			$scope.$watchCollection('data2', function(){
				$cookieStore.put('data2', $scope.data2);
			});
		   $scope.deleteItemFromArray = function(array, index){
			    array.splice(index, 1);
			};
		}
	]);
})();


