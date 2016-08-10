class Product {

	constructor( obj ) {

		//destructure of brevity
		let {name, price, quanity} = obj;

		if ( isNaN( quanity ) ) {
			quanity = '';
		}
		if ( isNaN( price ) ) {
			price = '';
		}

		this.name = name;
		this.quanity = quanity,
		this.price = price

	}

}

export default Product;