import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<TableContainer className="signup-container">
			<div className="center">
				<table>
					<thread>
						<tr>
							<td style={{ width: "33.33%" }}>
								<div className="dash"></div>
							</td>
							<td style={{ padding: "0 6px" }}>
								<h1>Register</h1>
							</td>
							<td style={{ width: "33.33%" }}>
								<div className="dash"></div>
							</td>
						</tr>
						<tr>
							<td colspan="3">
								<p>Create your account. It's free and only takes a minute.</p>
							</td>
						</tr>
					</thread>
					<tr>
						<td colspan="3">
							<div>
								<input placeholder="First Name" type="text" />
								<span>
									<input placeholder="Last Name" style={{ float: "right" }} type="text" />
								</span>
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="3">
							<div>
								<input type="email" placeholder="Email" />
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="3">
							<div>
								<input placeholder="Password" type="password" />
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="3">
							<div>
								<input placeholder="Confirm Password" type="password" />
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="3">
							<div className="terms">
								<input id="checkid2" type="checkbox" value="test" />{" "}
								<label htmlFor="checkid2">
									I accept the{" "}
									<a href="https://github.com/peterphan20" target="_blank" rel="noreferrer">
										Terms of Use
									</a>{" "}
									&{" "}
									<a href="https://github.com/peterphan20" rel="noreferrer">
										Privacy Policy.
									</a>
								</label>
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="3">
							<div>
								<input type="submit" value="Register Now" />
							</div>
						</td>
					</tr>
				</table>
				<footer>
					<p>
						Already have an account?{" "}
						<a href="https://github.com/peterphan20" target="_blank" rel="noreferrer">
							Sign in
						</a>
					</p>
				</footer>
			</div>
		</TableContainer>
	);
};

export default SignUp;

const TableContainer = styled.div`
	.center {
		width: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
	}
	table {
		width: 50%;
		margin: 0 auto;
		padding: 2%;

		border-radius: 4px;
		background-color: #f2f3f7;
		min-width: 360px;
		max-width: 420px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		border: 1px solid #58677b;
	}
	input[type="text"],
	[type="email"],
	[type="password"],
	[type="submit"] {
		width: 100%;
		height: 40px;
		padding: 12px;
		border: 1px solid #cccccc;
		border-radius: 3px;
		outline: none;
		font-size: 14px;
		color: #4fa64e;
	}
	input[type="text"] {
		width: 49%;
	}
	input:hover {
		border-color: #4fa64e;
	}
	input[type="submit"] {
		background-color: #53ac53;
		background: linear-gradient(to bottom, #58b358 0%, #449944 100%);
		color: #ffffff;
		font-weight: 600;
		border: none;
	}
	input[type="submit"]:hover {
		cursor: pointer;
	}
	::placeholder {
		color: #969fa4;
	}
	.signup-input-field {
	}
	p {
		text-align: center;
		font-size: 14px;
		color: #969fa4;
		margin: 12px 0;
	}
	input[type="checkbox"] {
		vertical-align: middle;
		height: 14px;
		width: 14px;
		background-color: red;
	}
	.terms > label {
		font-size: 14px;
		color: #969fa4;
		margin-left: 6px;
	}
	div {
		margin: 10px 0;
	}
	a {
		color: #4fa64e;
		text-decoration: none;
	}
	footer {
		margin-top: 16px;
	}
	footer > p {
		color: #ffffff;
	}
	footer > p > a {
		color: #ffffff;
		text-decoration: underline;
	}
	.dash {
		min-height: 2px;
		height: 2px;
		max-height: 2px;
		width: 100%;
		background-color: #d4d4d4;
	}
	h1 {
		text-align: center;
		font-weight: 500;
		color: #636363;
		text-align: 31px;
	}
	.top {
		width: 100%;
		background-color: salmon;
	}
`;
