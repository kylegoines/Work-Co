var storeCtrl = function( $scope, dataService ) {

	$scope.store = dataService.store
	$scope.add = dataService.add;

	$scope.addToCart = function( item ) {

		dataService.addToCart( item );

	}

	$scope.addNewItem = function(){

		var productObj = {
			name: $scope.itemName,
			quanity: parseInt( $scope.itemQuanity, 10 ),
			price: parseInt( $scope.itemPrice, 10 ),
		}

		//send off data
		dataService.addItemtoStore( productObj );

	}
}

export default storeCtrl;
