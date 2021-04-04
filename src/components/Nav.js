import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
	return (
		<MenuBar className="nav-container">
			<nav className="nav-ui">
				<ol className="nav-menu">
					<li className="nav-link">
						<Link to="/addmember">Add Member</Link>
					</li>
					<li className="nav-link">
						<Link>Log In</Link>
					</li>
					<li className="nav-link">
						<Link>Sign Up</Link>
					</li>
				</ol>
			</nav>
		</MenuBar>
	);
};

export default Nav;

const MenuBar = styled.div`
	ol {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	a {
    font-size: 13px;
		text-decoration: none;		
    color: rgb(255, 144, 21);
	}
	.nav-link {
		list-style: none;
		white-space: nowrap;
		margin-left: 10px;
		margin-right: 15px;
	}
`;
