var authService = function() {

	var _toast = {
		error: ''
	};

	function storeAuth( product, _store ) {

		var hasEmpty = false;

		// see if any property is empty, null or not a num
		for (var member in product) {
			if ( product[member] === '' || product[member] === undefined ) {

				_toast.error = 'Values have been left undefined!';
				hasEmpty = true;
			}
		}

		if ( hasEmpty ) {
			return false;
		}

		var filteredArray = _store.items.filter( function( comparatorItem ) {
			if ( comparatorItem.name === product.name ) {
				_toast.error = `${comparatorItem.name} is already been created!`;
				return comparatorItem;
			}
		});

		// if name exists, better would be an ID
		if ( filteredArray.length != 0 ) {
			return false;
		}

		_toast.error = ''
		return true;

	}

	return{
		storeAuth: storeAuth,
		toast: _toast,
	}
}

export default authService;