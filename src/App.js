import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import NavBar from './Components/navBar';
import ProductList from './Components/products';
import UserProfile from './Components/profile';
import Register from './Components/register';

function App() {
	return (
		<div>
			<NavBar />

			<Router>
				<Routes>
					<Route path="/onestop/register" element={<Register />}></Route>
					<Route path="/onestop/products" element={<ProductList />}></Route>
					<Route
						exact
						path="`/onestop/${username}/profile`"
						element={<UserProfile />}
					></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
