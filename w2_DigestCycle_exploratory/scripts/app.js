(function() {
	'use strict';

	angular.module("digestCycleExplorer", []).controller('CounterController',
			CounterController);
	CounterController.$inject = [ "$scope" ];

	function CounterController($scope) {
		$scope.counter = 0;
		$scope.c = 0;

		$scope.incrementCounter = function() {
			setTimeout(function() {
				++$scope.counter;
				if( Math.round(Math.random()) ) {
					$scope.$digest();
				}
			}, 1000);

		};

		$scope.logNumberOfWatchers = function() {
			console.log("# of watchers: " + $scope.$$watchersCount);
		};

		$scope.$watch(function() {
			console.log("Running Digest Cycle");
		});
	}

})();