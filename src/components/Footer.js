import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<StyledFooter>
			<SubscribeContainer>
				<h1>Subscribe</h1>
				<p>If you would like to learn more about our guild, please sign up for our newsletter.</p>
				<div className="email-input-btn">
					<input type="email" placeholder="Email Address" required />
					<button>Subscribe!</button>
				</div>
			</SubscribeContainer>
			<FooterLinks>
				<AboutUsSection>
					<h1>LongBoi</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quasi perferendis
						ratione perspiciatis accusantium.
					</p>
				</AboutUsSection>
				<UsefulLinksSection>
					<p>Home</p>
					<p>Contact</p>
					<p>About</p>
					<p>Blog</p>
					<p>Terms & Conditions</p>
				</UsefulLinksSection>
				<SocialMediaSection>
					<div className="footer-icons">
						<i className="fab fa-instagram instagram"></i>
						<i className="fab fa-facebook-f facebook"></i>
						<i className="fab fa-twitter twitter"></i>
						<i class="fab fa-pinterest-p pinterest"></i>
					</div>
					<div className="github-individual">
						<a href="https://github.com/peterphan20">
							<i className="fab fa-github"></i>
						</a>
						<h3>Peter Phan</h3>
					</div>
					<div className="github-individual">
						<a href="https://github.com/anthonybui94">
							<i className="fab fa-github"></i>
						</a>
						<h3>Anthony Bui</h3>
					</div>
				</SocialMediaSection>
			</FooterLinks>
		</StyledFooter>
	);
};

export default Footer;

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const SubscribeContainer = styled.div`
	background-color: rgb(119, 178, 85);
	color: #111827;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 20em;

	h1 {
		font-size: 2em;
		font-weight: 700;
		padding-bottom: 5px;
	}
	p {
		font-size: 1em;
		font-weight: 400;
		padding-bottom: 1em;
	}
	input {
		font-size: 12px;
		padding: 5px 10px;
		outline: none;
	}
	button {
		background-color: #111827;
		color: #f3f4f6;
		font-size: 12px;
		outline: none;
		padding: 5px 10px;
		cursor: pointer;
	}
`;
const FooterLinks = styled.div`
	background-color: #111827;
	color: #9ca3af;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
	width: 100%;
	height: 400px;
`;
const AboutUsSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 22em;

	h1 {
		color: #f3f4f6;
		font-size: 1.6em;
		font-weight: 400;
		padding-bottom: 20px;
	}
	p {
		font-size: 1em;
		font-weight: 400;
		line-height: 1.5;
	}
`;
const UsefulLinksSection = styled.div`
	font-size: 1em;
	font-weight: 400;
	line-height: 1.7;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	p:hover {
		color: rgb(119, 178, 85);
		cursor: pointer;
	}
`;
const SocialMediaSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	.github-individual {
		display: flex;
		gap: 15px;

		h3 {
			color: #f3f4f6;
			font-size: 15px;
		}
		i {
			font-size: 1.2em;
			padding-bottom: 1em;
		}
	}
	.footer-icons {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 15px;
		padding-bottom: 2em;

		i {
			font-size: 1.2em;
			cursor: pointer;
			transition: 0.3s ease;
		}
		i:hover {
			color: #f3f4f6;
			transform: scale(1.1);
		}
	}
`;
