import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUp = () => {
	const [signupEmail, setSignupEmail] = useState("");
	const [signupName, setSignupName] = useState("");
	const [signupUsername, setSignupUsername] = useState("");
	const [signupPassword, setSignupPassword] = useState("");

	const handleSignupAuth = () => {
		console.log("hello");
	};

	return (
		<SignupContainer>
			<SignupForm>
				<Signuph1>Sign Up</Signuph1>
				<div className="input-field">
					<SignupLabel htmlFor="signup-email">Email Address</SignupLabel>
					<IconTextBox>
						<i class="fas fa-inbox"></i>
						<SignupInputField
							type="email"
							id="signup-email"
							placeholder="Email Address"
							required
							value={signupEmail}
							onChange={(e) => setSignupEmail(e.target.value)}
						/>
					</IconTextBox>
				</div>
				<div className="input-field">
					<SignupLabel htmlFor="signup-email">Full Name</SignupLabel>
					<IconTextBox>
						<i class="fas fa-user-circle"></i>
						<SignupInputField
							type="text"
							id="signup-email"
							placeholder="Full Name"
							required
							value={signupName}
							onChange={(e) => setSignupName(e.target.value)}
						/>
					</IconTextBox>
				</div>
				<div className="input-field">
					<SignupLabel htmlFor="signup-username">Username</SignupLabel>
					<IconTextBox>
						<i className="far fa-user"></i>
						<SignupInputField
							type="text"
							id="signup-username"
							placeholder="Username"
							required
							value={signupUsername}
							onChange={(e) => setSignupUsername(e.target.value)}
						/>
					</IconTextBox>
				</div>
				<div className="input-field">
					<SignupLabel htmlFor="signup-password">Password</SignupLabel>
					<IconTextBox className="icon-textbox">
						<i className="fas fa-lock"></i>
						<SignupInputField
							type="password"
							id="signup-password"
							placeholder="Password"
							required
							value={signupPassword}
							onChange={(e) => setSignupPassword(e.target.value)}
						/>
					</IconTextBox>
				</div>
				<SignupFooter>
					<SignupBtn onClick={handleSignupAuth}>Log In</SignupBtn>
					<IconText>Or sign up with </IconText>
					<FooterIcons>
						<i class="fab fa-facebook-f facebook"></i>
						<i class="fab fa-twitter twitter"></i>
						<i class="fab fa-google google"></i>
					</FooterIcons>
					<Login>
						Already have an account? <Link to="/login">Login</Link>
					</Login>
				</SignupFooter>
			</SignupForm>
		</SignupContainer>
	);
};

export default SignUp;

const SignupContainer = styled.div`
	background-color: #e5e7eb;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100%;
	min-width: 100%;
`;
const SignupForm = styled.div`
	background-color: #f9fafb;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	width: 260px;
`;
const Signuph1 = styled.h1`
	font-size: 20px;
	font-weight: 600;
	margin-top: 35px;
	margin-bottom: 10px;
`;
const SignupLabel = styled.label`
	font-size: 8px;
	font-weight: 400;
	display: block;
	margin-top: 18px;
	margin-bottom: 2px;
`;
const SignupInputField = styled.input`
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
const SignupFooter = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const SignupBtn = styled.button`
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
	margin-top: 18px;
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
const Login = styled.div`
	font-size: 7px;
	font-weight: 300;
	padding-top: 15px;
	margin-top: 15px;
	margin-bottom: 30px;
`;
