(function() {
	'use strict';

	angular.module("launchChecker", []).controller('FirstController',
			FirstController);
	FirstController.$inject = [ "$scope" ];

	function FirstController($scope) {
		$scope.dishes = "";
		$scope.launchAmountMsg = "";
		$scope.checkLaunchAmount = function() {
			if ($scope.dishes == "") {
				$scope.launchAmountMsg = "Empty";
				return;
			}
			$scope.launchAmountMsg = isItTooMuch($scope.dishes) ?
					"Too much!" : "Enjoy!";
		};
	}

	function isItTooMuch(dishes) {
		var dishesArray = dishes.split(",");
		return dishesArray.length > 3;
	}

})();