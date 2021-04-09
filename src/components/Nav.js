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
			<div className="bottom-nav-bar"></div>
		</nav>
	);
};

export default Nav;

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
