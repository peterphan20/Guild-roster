import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { createAuthToken } from "../helpers/auth";

const MemberSignupPage = () => {
	const [signupUsername, setSignupUsername] = useState("");
	const [signupPassword, setSignupPassword] = useState("");
	const [signupSuccess, setSignupSuccess] = useState({});
	const [signupFailure, setSignupFailure] = useState([]);

	const handleSignupAuth = async () => {
		const response = await createAuthToken(signupUsername, signupPassword);
		if (!Array.isArray(response)) {
			setSignupSuccess(response);
		} else {
			setSignupFailure(response);
		}
	};

	const handleResponse = () => {
		if (signupSuccess.token) {
			return <p>Account successfully created</p>;
		} else {
			if (!signupFailure) return;
			return <p>Invalid username or password</p>;
		}
	};

	return (
		<SignupContainer>
			<SignupForm>
				<h1>Sign Up</h1>
				<SignupLabel htmlFor="signup-username">Username</SignupLabel>
				<IconTextBox>
					<i className="far fa-user"></i>
					<SignupInputField
						type="text"
						id="signup-username"
						placeholder="Username"
						value={signupUsername}
						onChange={(e) => setSignupUsername(e.target.value)}
						required
					/>
				</IconTextBox>
				<SignupLabel htmlFor="signup-password">Password</SignupLabel>
				<IconTextBox>
					<i className="fas fa-lock"></i>
					<SignupInputField
						type="password"
						id="signup-password"
						placeholder="Password"
						value={signupPassword}
						onChange={(e) => setSignupPassword(e.target.value)}
						required
					/>
				</IconTextBox>
				<SignupBtn onClick={handleSignupAuth}>Log In</SignupBtn>
				<StyledResponseText>{handleResponse()}</StyledResponseText>
				<Login>
					Already have an account? <Link to="/login">Login</Link>
				</Login>
			</SignupForm>
		</SignupContainer>
	);
};

export default MemberSignupPage;

const SignupContainer = styled.div`
	background-color: #e5e7eb;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 200px 0px 300px 0px;
	height: 100%;
	width: 100%;
`;
const SignupForm = styled.div`
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
const SignupLabel = styled.label`
	color: #121212;
	padding: 1em 0 0.5em 0;
`;
const SignupInputField = styled.input`
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
const SignupBtn = styled.button`
	background-color: rgb(119, 178, 85);
	color: #121212;
	border: 1px solid #111827;
	border-radius: 5px;
	padding: 0.8em;
	margin: 1.5em 0;
	width: 100%;
	cursor: pointer;
`;
const StyledResponseText = styled.div`
	color: red;
	font-size: 0.8em;
	align-self: center;
	margin-top: 10px;
`;
const Login = styled.div`
	font-size: 0.8em;
	align-self: center;
	padding-top: 15px;
	margin: 1em 0 2em 0;
`;
