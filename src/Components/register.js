import React, { useState } from 'react';
import axios from 'axios';

import { Form, Button, FormGroup, FormControl, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SignupButton from './authFiles/sign-up-btn';

const Register = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [userExists, setUserExists] = useState(false);

	const formSubmit = async (e) => {
		e.preventDefault();
		console.log(userExists);
		try {
			const body = { email, username, password };
			console.log(body);

			const response = await axios.post(
				'/register',
				JSON.stringify(body),
				{
					headers: { 'Content-Type': 'application/json' },
				}
			);
			console.log(response);
			navigate(`/${username}/profile`);
		} catch (error) {
			if (error.message === 'Request failed with status code 409') {
				setUserExists(true);
			}
			console.log(error.message);
		}
	};

	return (
		<>
			<Form onSubmit={formSubmit}>
				<FormGroup controlId="Email">
					<label>Email:</label>
					<FormControl
						type="email"
						placeholder="email"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</FormGroup>
				<FormGroup controlId="Username">
					<label>Username:</label>
					<FormControl
						type="username"
						placeholder="username"
						onChange={(e) => {
							setUsername(e.target.value);
							setUserExists(false);
						}}
					/>
					{userExists ? 'Username taken' : null}
				</FormGroup>
				<FormGroup controlId="Password">
					<label>Password:</label>
					<FormControl
						type="password"
						placeholder="password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</FormGroup>
				<p></p>
				<Button type="submit">Submit</Button>
			</Form>
			<p></p>
			<SignupButton />
			<p></p>
			Already Registerd?
			<Nav.Link href="/login">Sign In</Nav.Link>
		</>
	);
};

export default Register;
