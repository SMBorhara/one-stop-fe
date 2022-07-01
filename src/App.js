import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import NavBar from './Components/navBar';
import Home from './Components/Home';
import ProductList from './Components/products';

import Register from './Components/register';

function App() {
	return (
		<div>
			<NavBar />

			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/register" element={<Register />}></Route>
					<Route path="/products" element={<ProductList />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
