class Product {

	constructor( obj ) {

		//destructure of brevity
		const {name, price, quanity} = obj;

		this.name = name;
		this.quanity = quanity,
		this.price = price

	}

}

export default Product;