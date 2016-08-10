// for brevity import the data from this file
import data from './dataModel.js';
import Product from '../classes/product.js'
//dont forget to pass reference, not value :3

var dataService = function() {

	var _store = {
		items: data
	};

	var _cart = {
		items: []
	};

	var _toast = {
		error: ''
	}

	////////////////////////////////////////////////////////////////////////////////////////////

	function _storeAuth( product ) {

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



	////////////////////////////////////////////////////////////////////////////////////////////

	function addItemtoStore( collection ) {

		var product = new Product( collection );

		if ( _storeAuth( product ) ) {
			_store.items.push( product );
		}

	}

	////////////////////////////////////////////////////////////////////////////////////////////

	function addToCart( item, quanity ) {

		var product = {
			name: item.name,
			price: item.price,
			quanity: 1
		}

		_updateItemQuanity( item, -1 );
		_mergeCartItems( _cart.items, product );

	}

	////////////////////////////////////////////////////////////////////////////////////////////

	// quanity default 1
	function _updateItemQuanity(item, quanity = 1){
		item.quanity += quanity;
	}

	////////////////////////////////////////////////////////////////////////////////////////////

	function removeFromCart( index ) {

		var cartItem = _cart.items[index];

		//update the quanity in the cart
		if ( cartItem.quanity > 1 ) {
			_updateItemQuanity( cartItem, -1 )
		} else {
			_cart.items.splice( index, 1 );
		}

		// find the item in the store and update the quanity
		_store.items.map( function( storeItem ) {

			if ( storeItem.name === cartItem.name ) {
				_updateItemQuanity( storeItem );
			}
		})

	}

	////////////////////////////////////////////////////////////////////////////////////////////

	function _mergeCartItems( itemArray, newItem ) {

		var found = false

		// if the item already exists in the cart, just increase the quanity
		itemArray.map( function( item ) {

			if ( item.name === newItem.name ) {
				_updateItemQuanity(item)
				found = true;
			}
		})

		// its a new item, push it to the cart
		if ( !found ) {
			itemArray.push( newItem )
		}

	}

	////////////////////////////////////////////////////////////////////////////////////////////

	// remove item via id
	function removeItem( id ) {
		console.log( 'removed' );
	}

	////////////////////////////////////////////////////////////////////////////////////////////

	// exports
	return {
		store: _store,
		cart: _cart,
		toast: _toast,
		addToCart: addToCart,
		removeFromCart: removeFromCart,
		addItemtoStore : addItemtoStore
	}
}

export default dataService;