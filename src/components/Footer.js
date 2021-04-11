import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<StyledFooter>
			<h1>Subscribe</h1>
			<p>If you would like to know more about out guild, please sign up for out newsletter.</p>
			<input type="email" placeholder="Email Address" required />
		</StyledFooter>
	);
};

export default Footer;

const StyledFooter = styled.footer`
	background-color: #e5e7eb;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
