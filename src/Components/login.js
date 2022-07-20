import axios from 'axios';
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LoginButton from './authFiles/loginOAuth';

const Login = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	// const [isLoggedIn, setisLoggedIn] = useState(false);

	const loginSubmit = async (e) => {
		e.preventDefault();
		try {
			const body = { username, password };
			const response = await axios.post(
				'http://localhost:8000/login',
				JSON.stringify(body),
				{
					headers: { 'Content-Type': 'application/json' },
				}
			);
			console.log(response);
			// setisLoggedIn(true);
			navigate(`/${username}/profile`);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div>
			<form onSubmit={loginSubmit}>
				<h3>Sign In</h3>
				<div className="mb-3">
					<label>Username</label>
					<input
						type="username"
						className="form-control"
						placeholder="Enter username"
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					/>
				</div>
				<div className="mb-3">
					<label>Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Enter password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<div className="mb-3">
					<div className="custom-control custom-checkbox">
						<input
							type="checkbox"
							className="custom-control-input"
							id="customCheck1"
						/>
						<label className="custom-control-label" htmlFor="customCheck1">
							Remember me
						</label>
					</div>
				</div>
				<div className="d-grid">
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
					<Nav.Link href="/register">Not registered?</Nav.Link>
				</div>
				<p className="forgot-password text-right">
					<Nav.Link>Forgot password?</Nav.Link>
				</p>
			</form>
			<LoginButton />
		</div>
	);
};

export default Login;

