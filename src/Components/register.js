import React from 'react';
import { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const onSubmitNewUser = async (e) => {
		e.preventDefault();

		try {
			const body = { email, username, password };
			console.log(body);
			const response = await fetch('http://localhost:8000/onestop/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			});
			console.log(response);
			setEmail('');
			setUsername('');
			setPassword('');
			navigate(`/onestop/${username}/profile`);
		} catch (error) {
			console.error(error.message);
		}
	};
	return (
		<div>
			Please fill out all fields.
			<p></p>
			<Form onSubmit={onSubmitNewUser}>
				{/* <Row>
					<Col xs="auto">
						<Form.Group as={Col} controlId="formGridFirst">
							<Form.Label>First Name</Form.Label>
							<Form.Control type="firstName" placeholder="First Name" />
							<p></p>
							<p></p>
						</Form.Group>
					</Col>
					<Col xs="auto">
						<Form.Group as={Col} controlId="formGridLast">
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="Last Name" placeholder="Last Name" />
							<p></p>
							<p></p>
						</Form.Group>
					</Col>
				</Row> */}

				<Row className="mb-3">
					<Col xs="auto">
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>
					</Col>
					<Col xs="auto">
						<Form.Group as={Col} controlId="formGridUsername">
							<Form.Label>Username</Form.Label>
							<Form.Control
								type="username"
								placeholder="Username"
								onChange={(e) => setUsername(e.target.value)}
							/>
							<p>Username should be at least 5 characters</p>
						</Form.Group>
					</Col>
					<Col xs="auto">
						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>
					</Col>
				</Row>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Register;
