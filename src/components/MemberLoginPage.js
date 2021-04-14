import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { fetchAuthToken } from "../helpers/auth";

const MemberLoginPage = ({ auth, setAuth }) => {
	const [loginUsername, setLoginUsername] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	const handleLoginAuth = async () => {
		const response = await fetchAuthToken(loginUsername, loginPassword);
		if (!response.token) {
			return;
		}
		localStorage.setItem("jwtToken", JSON.stringify(response));
		setAuth(response);
	};

	return (
		<LoginContainer>
			<LoginForm>
				<h1>Login</h1>
				<LoginLabel htmlFor="login-email">Username</LoginLabel>
				<IconTextBox>
					<i className="far fa-user"></i>
					<LoginInputField
						type="text"
						id="login-email"
						placeholder="Username"
						required
						value={loginUsername}
						onChange={(e) => setLoginUsername(e.target.value)}
					/>
				</IconTextBox>
				<LoginLabel htmlFor="login-password">Password</LoginLabel>
				<IconTextBox>
					<i className="fas fa-lock"></i>
					<LoginInputField
						type="password"
						id="login-password"
						placeholder="Password"
						required
						value={loginPassword}
						onChange={(e) => setLoginPassword(e.target.value)}
					/>
				</IconTextBox>
				<LoginBtn onClick={handleLoginAuth}>Log In</LoginBtn>
				<ResponseText>
					{auth.username ? "You are signed in" : "Incorrect username or password"}
				</ResponseText>
				<SignUp>
					Don't have an account? <Link to="/signup">Sign Up</Link>
				</SignUp>
			</LoginForm>
		</LoginContainer>
	);
};

export default MemberLoginPage;

const LoginContainer = styled.div`
	background-color: #e5e7eb;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 200px 0px 300px 0px;
	height: 100%;
	width: 100%;
`;
const LoginForm = styled.div`
	background-color: #f3f4f6;
	color: #111827;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border: 1px solid #111827;
	border-radius: 10px;
	padding: 2em 3em;
	width: clamp(300px, 40vw, 375px);

	a {
		text-decoration: none;
	}
	h1 {
		font-size: 2em;
		font-weight: 700;
		align-self: center;
		margin-bottom: 1em;
	}
`;
const LoginLabel = styled.label`
	color: #121212;
	padding: 1em 0 0.5em 0;
`;
const LoginInputField = styled.input`
	background: transparent;
	font-size: 1em;
	border: none;
	outline: none;
`;
const IconTextBox = styled.div`
	display: inline;
	border: none;
	outline: none;
	border-bottom: 1px solid #333;
	margin: 0 0.125em;
	width: 100%;
	vertical-align: baseline;

	i {
		color: #333333;
		font-size: 0.8em;
		padding-right: 0.5em;
	}
`;

const LoginBtn = styled.button`
	background-color: rgb(119, 178, 85);
	color: #121212;
	border: 1px solid #111827;
	border-radius: 5px;
	padding: 0.8em;
	margin: 1.5em 0;
	width: 100%;
	cursor: pointer;
`;
const ResponseText = styled.p`
	color: red;
	font-size: 0.8em;
	align-self: center;
	margin-top: 10px;
`;
const SignUp = styled.div`
	font-size: 0.8em;
	align-self: center;
	padding-top: 15px;
	margin: 1em 0 2em 0;
`;
