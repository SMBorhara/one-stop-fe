import React from 'react';
import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Container,
	Button,
} from 'react-bootstrap';

const NavBar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="/onestop">One Stop Mama</Navbar.Brand>

				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href="/onestop/register">Register</Nav.Link>
						<Nav.Link href="#action2">Login</Nav.Link>
						<Nav.Link href="/onestop/username/profile">Account</Nav.Link>
						<Nav.Link href="/onestop/products">Products</Nav.Link>
						<Nav.Link href="#action4">Cart</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<FormControl
							type="search"
							placeholder="Something specific?"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
