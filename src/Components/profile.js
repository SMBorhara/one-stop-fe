import React from 'react';
import { Nav } from 'react-bootstrap';
import AuthenticationButton from './authFiles/authBtn';

import { useAuth0 } from '@auth0/auth0-react';
import Login from './login';

const UserProfile = () => {
	const { user, isAuthenticated } = useAuth0();
	const { username } = Login();

	return (
		<div>
			{isAuthenticated ? (
				<div>
					<h1>Hello {user.name} </h1> || <h1>Hello {username} </h1>
					<AuthenticationButton />
				</div>
			) : (
				<div>
					<Nav.Link href="/login"> PleaseLogin</Nav.Link>
					<AuthenticationButton />
				</div>
			)}
		</div>
	);
};

export default UserProfile;
