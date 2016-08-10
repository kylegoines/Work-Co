var storeCtrl = function( $scope, dataService ) {

	$scope.store = dataService.store
	$scope.add = dataService.add;

	$scope.addToCart = function( item ) {

		dataService.addToCart( item );

	}
}

export default storeCtrl;
