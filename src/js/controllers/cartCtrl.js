var cartCtrl = function( $scope, dataService ) {

	$scope.cart = dataService.cart;

	$scope.removeFromCart = function( e, i ) {
		dataService.removeFromCart( i );
	}

	$scope.totalItems = function(){
		var total = 0;

		$scope.cart.items.forEach(function(i){
			total += i.quanity
		})
		return total;
	}

	$scope.totaPrice = function(){
		var total = 0;

		$scope.cart.items.forEach(function(i){

			total += i.price * i.quanity

		})
		
		// return money cheat..
		// not viable in production
		return total.toFixed(2);
	}

}

export default cartCtrl;