import axios from 'axios';
import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductList = () => {
	const getProducts = async () => {
		console.log('help');
		try {
			const response = await axios.get('http://localhost:8000/products');

			console.log(response);
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getProducts();
	});

	return (
		<Card border="info" style={{ width: '18rem' }}>
			<Card.Img variant="top" src="pexels-lilartsy-3335613.jpg" />
			<Card.Body>
				<Card.Title>Coffee Mug</Card.Title>
				<Card.Text>
					Coffee Mugs available in various colors. Personalization available or
					choose from one of many saying options.
					<p>Price: $11.99</p>
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};

export default ProductList;
