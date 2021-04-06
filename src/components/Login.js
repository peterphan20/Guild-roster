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
			<div className="login-ui">
				<div className="login-container">
					<h1>Log In</h1>
					<p className="sign-up-link">
						Don't have an account? <Link to="/signup">Sign Up</Link>
					</p>
					<hr />
					<div className="login-input-fields">
						<label htmlFor="login-email">Username</label>
						<input
							type="text"
							id="login-email"
							placeholder="Username"
							required
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<label htmlFor="login-password">Password</label>
						<input
							type="password"
							id="login-password"
							placeholder="Password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="login-footer">
						<p>
							Forgot your{" "}
							<a href="https://github.com/peterphan20" target="_blank" rel="noreferrer">
								username
							</a>{" "}
							or{" "}
							<a href="https://github.com/peterphan20" target="_blank" rel="noreferrer">
								password
							</a>
							?
						</p>
						<button onClick={handleLoginAuth}>Log In</button>
						<button onClick={handleLogout}></button>
						<p>{auth.username ? "you is signed in" : "you is signed out"}</p>
					</div>
				</div>
			</div>
		</LoginContainer>
	);
};

export default Login;

const LoginContainer = styled.div`
	div.login-ui {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
		width: 100%;
	}
	div.login-container {
		background-color: #eeeeee;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 7px;
		margin: auto;
		padding: 1.8rem;
		width: 300px;
		box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.1);
	}
	h1 {
		font-size: 2em;
		font-weight: 500;
		margin-bottom: 0.2em;
	}
	p {
		font-size: 0.65em;
		font-weight: 400;
	}
	hr {
		border: 0.1px solid rgb(170 166 166);
		margin-top: 1px;
		margin-bottom: 20px;
		width: 230px;
	}
	label {
		display: block;
		color: rgb(170 166 166);
		font-size: 0.8em;
		font-weight: 400;
		margin-left: 2px;
	}
	input[type="text"],
	input[type="password"] {
		background-color: #eeeeee;
		font-size: 1em;
		font-weight: 400;
		border: 1px solid #ccc;
		border-radius: 7px;
		box-sizing: border-box;
		padding-top: 6px;
		padding-bottom: 6px;
		padding-left: 7px;
		padding-right: 25px;
	}
	input[type="text"] {
		margin-top: 5px;
		margin-bottom: 10px;
	}
	input[type="password"] {
		margin-top: 5px;
		margin-bottom: 15px;
	}
	button {
		background-color: rgb(69, 69, 185);
		color: #f1f1f1;
		font-size: 12px;
		font-weight: 400;
		border: none;
		border-radius: 6px;
		padding: 8px 20px;
		width: 235px;
	}
	a {
		text-decoration: none;
	}
	.sign-up-link {
		margin-bottom: 1.5em;
	}
	.login-footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.login-footer p {
		margin-top: 5px;
		margin-bottom: 1.5em;
	}
`;
