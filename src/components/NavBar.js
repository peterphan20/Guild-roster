import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/logo192.png";

const NavBar = () => {
	return (
		<StyledNav>
			<StyledLogoHeader>
				<Link to="/" onClick={() => window.scrollTo(0, 0)}>
					<img src={logo} alt="longboi" />
					<h1>LongBoi</h1>
				</Link>
			</StyledLogoHeader>
			<StyledLinkContainer>
				<Link to="/addmember">Add Member</Link>
				<Link to="/login">Log In</Link>
				<Link to="/signup">Sign Up</Link>
			</StyledLinkContainer>
		</StyledNav>
	);
};

export default NavBar;

const StyledNav = styled.nav`
	background-color: #f3f4f6;
	position: fixed;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 30px;
	top: 0;
	left: 0;
	width: 100%;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	z-index: 10;

	&:hover {
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
	}
	a {
		color: #111827;
		font-size: 20px;
		text-decoration: none;
	}
`;
const StyledLogoHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;

	a {
		color: rgb(119, 178, 85);

		display: flex;
		gap: 10px;
		img {
			width: 30px;
			height: 35px;
		}
	}
`;
const StyledLinkContainer = styled.div`
	font-weight: 700;
	display: flex;
	align-items: center;
	gap: 2em;

	a:hover {
		color: rgb(119, 178, 85);
	}
`;
