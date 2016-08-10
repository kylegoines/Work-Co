var cartCtrl = function( $scope, dataService ) {

	$scope.cart = dataService.cart;

	$scope.removeFromCart = function( e, i ) {
		dataService.removeFromCart( i );
	}

	$scope.totaPrice = function(){
		var total = 0;

		console.log($scope.cart.items)
		$scope.cart.items.forEach(function(i){

			total += i.price * i.quanity

		})
		
		// return money cheat..
		// not viable in production
		return total.toFixed(2);
	}


}

export default cartCtrl;