import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
	return (
		<nav>
			<MenuBar>
				<NavLink>
					<Link to="/addmember">Add Member</Link>
				</NavLink>
				<NavLink>
					<Link to="/login">Log In</Link>
				</NavLink>
				<NavLink>
					<Link to="/signup">Sign Up</Link>
				</NavLink>
			</MenuBar>
		</nav>
	);
};

export default NavBar;

const MenuBar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;

	a {
		font-size: 18px;
		font-weight: 600;
		text-decoration: none;
		color: #28282b;
	}
`;
const NavLink = styled.li`
	list-style: none;
	white-space: nowrap;
	margin-left: 9px;
	margin-right: 15px;
`;
