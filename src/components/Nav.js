import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
	return (
		<nav className="nav-ui">
			<MenuBar className="nav-menu">
				<NavLink className="nav-link">
					<Link to="/addmember">Add Member</Link>
				</NavLink>
				<NavLink className="nav-link">
					<Link to="/login">Log In</Link>
				</NavLink>
				<NavLink className="nav-link">
					<Link to="/signup">Sign Up</Link>
				</NavLink>
			</MenuBar>
		</nav>
	);
};

export default Nav;

const MenuBar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;

	a {
		font-size: 12px;
		text-decoration: none;
		color: rgb(255, 144, 21);
	}
`;
const NavLink = styled.li`
	list-style: none;
	white-space: nowrap;
	margin-left: 9px;
	margin-right: 15px;
`;
