import axios from 'axios';
import React, { useEffect } from 'react';

const ProductList = () => {
	const getProducts = async () => {
		console.log('help');
		try {
			const response = await axios.get(
				'http://localhost:8000/products'
			);

			console.log(response);
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getProducts();
	});

	return <h1>All Products</h1>;
};

export default ProductList;
