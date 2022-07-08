import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import NavBar from './Components/navBar';
import Home from './Components/Home';
import ProductList from './Components/products';
import Register from './Components/register';
// import Login from './Components/login';
// import UserProfile from './Components/profile';
import LoginButton from './Components/authFiles/loginOAuth';
import Profile from './Components/authFiles/profileOAuth';
import LogoutButton from './Components/authFiles/logoutOAuth';
// import AuthNav from './Components/authFiles/authNav';

function App() {
	return (
		<div>
			<NavBar />

			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/register" element={<Register />}></Route>
					<Route path="/login" element={<LoginButton />}></Route>
					<Route path="/profile" element={<Profile />}></Route>
					<Route path="/logout" element={<LogoutButton />}></Route>
					<Route path="/products" element={<ProductList />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
