var cartCtrl = function( $scope, dataService ) {

	$scope.cart = dataService.cart;

	$scope.removeFromCart = function( e, i ) {
		dataService.removeFromCart( i );
	}

}

export default cartCtrl;