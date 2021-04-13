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
		console.log("token is generated");
		setAuth(response);
	};

	// const handleLogout = () => {
	// 	setAuth({});
	// 	localStorage.removeItem("jwtToken");
	// };

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
				<PasswordForgetLink>
					Forgot your{" "}
					<a href="https://github.com/peterphan20" target="_blank" rel="noreferrer">
						password
					</a>
					?
				</PasswordForgetLink>
				<LoginBtn onClick={handleLoginAuth}>Log In</LoginBtn>
				<ResponseText>
					{auth.username ? "You are signed in" : "Incorrect username or password"}
				</ResponseText>
				<IconText>Or Sign in With </IconText>
				<FooterIcons>
					<i className="fab fa-facebook-f facebook"></i>
					<i className="fab fa-twitter twitter"></i>
					<i className="fab fa-google google"></i>
				</FooterIcons>
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
const PasswordForgetLink = styled.p`
	font-size: 0.7em;
	align-self: flex-end;
	padding-top: 0.8em;
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
const IconText = styled.p`
	font-size: 0.8em;
	align-self: center;
	margin: 20px 0 10px 0;
`;
const FooterIcons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-self: center;
	gap: 10px;

	i {
		color: #fffae9;
	}
	.facebook {
		background-color: rgb(59, 89, 152);
		font-size: 1.2em;
		border-radius: 50%;
		width: 1.5em;
		height: 1.5em;
		padding: 5px 0px 0px 8px;
		transition: 0.1s ease-in;
		cursor: pointer;
	}
	.facebook:hover {
		background-color: #212529;
		transform: scale(1.14);
	}
	.twitter {
		background-color: rgb(0, 172, 238);
		font-size: 1.2em;
		border-radius: 50%;
		width: 1.5em;
		height: 1.5em;
		padding: 5px 0px 0px 5px;
		transition: 0.1s ease-in;
		cursor: pointer;
	}
	.twitter:hover {
		background-color: #212529;
		transform: scale(1.14);
	}
	.google {
		background-color: rgb(219 68 55);
		font-size: 1.2em;
		border-radius: 50%;
		width: 1.5em;
		height: 1.5em;
		padding: 5px 0px 0px 5px;
		transition: 0.1s ease-in;
		cursor: pointer;
	}
	.google:hover {
		background-color: #212529;
		transform: scale(1.2);
	}
`;
const SignUp = styled.div`
	font-size: 0.8em;
	align-self: center;
	padding-top: 15px;
	margin: 1em 0 2em 0;
`;
