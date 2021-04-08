import React, { useState } from "react";
import { fetchAuthToken } from "../helpers/auth";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const Login = ({ auth, setAuth }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLoginAuth = async () => {
		const response = await fetchAuthToken(username, password);
		if (!response.token) {
			return;
		}
		localStorage.setItem("jwtToken", JSON.stringify(response));
		console.log("token is generated");
		setAuth(response);
	};

	const handleLogout = () => {
		setAuth({});
		localStorage.removeItem("jwtToken");
	};

	return (
		<LoginContainer>
			<LoginForm>
				<Loginh1>Login</Loginh1>
				<div className="login-input-fields">
					<div className="input-field">
						<LoginLabel htmlFor="login-email">Username</LoginLabel>
						<IconTextBox className="icon-textbox">
							<i className="far fa-user"></i>
							<LoginInputField
								type="text"
								id="login-email"
								placeholder="Username"
								required
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</IconTextBox>
					</div>
					<div className="input-field">
						<LoginLabel htmlFor="login-password">Password</LoginLabel>
						<IconTextBox className="icon-textbox">
							<i className="fas fa-lock"></i>
							<LoginInputField
								type="password"
								id="login-password"
								placeholder="Password"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</IconTextBox>
					</div>
				</div>
				<PasswordForgetLink>
					Forgot your{" "}
					<a href="https://github.com/peterphan20" target="_blank" rel="noreferrer">
						password
					</a>
					?
				</PasswordForgetLink>
				<LoginFooter className="login-footer">
					<LoginBtn onClick={handleLoginAuth}>Log In</LoginBtn>
					{/* <ResponseText>{auth.username ? "you is signed in" : "you is signed out"}</ResponseText> */}
					<IconText>Or Sign in With </IconText>
					<FooterIcons>
						<i class="fab fa-facebook-f facebook"></i>
						<i class="fab fa-twitter twitter"></i>
						<i class="fab fa-google google"></i>
					</FooterIcons>
					<SignUp>
						Don't have an account? <Link to="/signup">Sign Up</Link>
					</SignUp>
					{/* <button onClick={handleLogout}>logout</button>*/}
				</LoginFooter>
			</LoginForm>
		</LoginContainer>
	);
};

export default Login;

const LoginContainer = styled.div`
	background-color: #e5e7eb;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100%;
	min-width: 100%;
`;
const LoginForm = styled.div`
	background-color: #f9fafb;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	width: 260px;
`;
const Loginh1 = styled.h1`
	font-size: 20px;
	font-weight: 600;
	margin-top: 35px;
	margin-bottom: 10px;
`;
const LoginLabel = styled.label`
	font-size: 8px;
	font-weight: 400;
	display: block;
	margin-top: 18px;
	margin-bottom: 2px;
`;
const LoginInputField = styled.input`
	background: transparent;
	color: #333333;
	font-size: 10px;
	border: none;
	outline: none;
	padding: 3px 65px 0px 7px;
`;
const IconTextBox = styled.div`
	margin: 0 0.125em;
	display: inline;
	border: none;
	outline: none;
	border-bottom: 1px solid #adadad;
	vertical-align: baseline;

	i {
		font-size: 8px;
		color: #333333;
	}
`;
const PasswordForgetLink = styled.p`
	font-size: 7px;
	margin-left: 17em;
	margin-top: 5px;
	margin-bottom: 17px;
`;
const LoginFooter = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const LoginBtn = styled.button`
	background-image: linear-gradient(
		to right,
		#00e9ff,
		#00d4ff,
		#00bcff,
		#00a3ff,
		#0085ff,
		#2775ff,
		#4e60ff,
		#7244ff,
		#853cfe,
		#9731fd,
		#a722fb,
		#b700f8
	);
	color: #fffae9;
	font-size: 10px;
	font-weight: 400;
	border: none;
	outline: none;
	border-radius: 15px;
	width: 20em;
	height: 2.4em;
	transition: background-image 0.3s ease;
	cursor: pointer;
	&:hover {
		background-image: linear-gradient(
			to left,
			#00e9ff,
			#00d4ff,
			#00bcff,
			#00a3ff,
			#0085ff,
			#2775ff,
			#4e60ff,
			#7244ff,
			#853cfe,
			#9731fd,
			#a722fb,
			#b700f8
		);
	}
`;
const ResponseText = styled.p`
	font-size: 8px;
	color: red;
	margin-top: 10px;
`;
const IconText = styled.p`
	font-size: 7px;
	font-weight: 300;
	margin-top: 20px;
`;
const FooterIcons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	i {
		color: #fffae9;
		margin-top: 7px;
		margin-left: 2px;
		margin-right: 2px;
	}
	.facebook {
		background-color: rgb(59, 89, 152);
		font-size: 12px;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		padding-top: 4px;
		padding-left: 6.4px;
		transition: 0.1s ease-in;
		cursor: pointer;
	}
	.facebook:hover {
		background-color: #212529;
		transform: scale(1.14);
	}
	.twitter {
		background-color: rgb(0, 172, 238);
		font-size: 10px;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		padding-top: 5px;
		padding-left: 5.3px;
		transition: 0.1s ease-in;
		cursor: pointer;
	}
	.twitter:hover {
		background-color: #212529;
		transform: scale(1.14);
	}
	.google {
		background-color: rgb(219 68 55);
		font-size: 9.5px;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		padding-top: 5.3px;
		padding-left: 5.6px;
		transition: 0.1s ease-in;
		cursor: pointer;
	}
	.google:hover {
		background-color: #212529;
		transform: scale(1.14);
	}
`;
const SignUp = styled.div`
	font-size: 7px;
	font-weight: 300;
	padding-top: 15px;
	margin-top: 15px;
	margin-bottom: 30px;
`;
