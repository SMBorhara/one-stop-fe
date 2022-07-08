import React from 'react';
import AuthenticationButton from './authFiles/authBtn';

import { useAuth0 } from '@auth0/auth0-react';

const UserProfile = () => {
	const { user, isAuthenticated } = useAuth0();
	return (
		<div>
			{isAuthenticated ? (
				<div>
					<h1>Hello {user.name} </h1>
					<AuthenticationButton />
				</div>
			) : (
				<div>
					<h1>Please log in</h1>
					<AuthenticationButton />
				</div>
			)}
		</div>
	);
};

export default UserProfile;
