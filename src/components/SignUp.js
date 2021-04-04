import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<div className="signup-container">
			<table>
				<thead>
					<tr>
						<td className="sign-up-firstname" style={{ width: "33.33%" }}>
							<div className="dash"></div>
						</td>
						<td style={{ padding: "0px 6px" }}>
							<h1>Register</h1>
						</td>
						<td className="sign-up-firstname" style={{ width: "33.33%" }}>
							<div className="dash"></div>
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colSpan={3}>
							<p>Create your account. It's free and only takes a minute.</p>
						</td>
					</tr>
					<tr>
						<td colSpan={3}>
							<div>
								<input type="text" placeholder="First Name" />
								<span>
									<input type="text" placeholder="Last Name" style={{ float: "right" }} />
								</span>
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div>
								<input type="email" placeholder="Email Address" />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div>
								<input type="password" placeholder="Password" />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div>
								<input type="password" placeholder="Confirm Password" />
							</div>
						</td>
					</tr>
					<tr>
						<td colSpan={3}>
							<div className="terms">
								<input id="checkid2" type="checkbox" value="test" />
								<label for="checkid2">
									I accept the <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a>
								</label>
							</div>
						</td>
					</tr>
					<tr>
						<td colSpan={3}>
							<div>
								<input type="submit" value="Register Now" />
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<footer>
				<p>
					Already have an account? <Link to="/signin">Sign In</Link>
				</p>
			</footer>
		</div>
	);
};

export default SignUp;
