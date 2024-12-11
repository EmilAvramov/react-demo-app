import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink to={'/'}>Books</NavLink>
					</li>
					<li>
						<NavLink to={'/profile'}>Profile</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
