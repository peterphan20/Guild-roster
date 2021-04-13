import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GuildIntroduction = () => {
	return (
		<div>
			<GuildIntroductionText>
				<h1>Guild Roster</h1>
				<p>
					Founded in 2021, this is a guild roster app that allows users to see members from
					particular guilds. The user may enter different search parameters to search for specific
					members within said guild. The list will be sorted by ranks then usernames. This is a
					personal project for learning purposes and is not accepting contributions. You are welcome
					to modify and distribute any versions as you please. 🦕
				</p>
			</GuildIntroductionText>
			<StyledApplyNowContainer>
				<h1>Ready for an adventure?</h1>
				<p>If you want to make WOW history, join us on the road world first.</p>
				<StyledApplyNowButton>
					<Link to="/signup">Apply Now ➡</Link>
				</StyledApplyNowButton>
			</StyledApplyNowContainer>
		</div>
	);
};

export default GuildIntroduction;

const GuildIntroductionText = styled.div`
	color: #36454f;
	padding-left: 5em;
	padding-right: 5em;
	width: 100%;

	h1 {
		font-size: 3.5em;
	}
	p {
		font-size: 1.1em;
		line-height: 1.7;
		padding-bottom: 2.2em;
	}
`;
const StyledApplyNowContainer = styled.div`
	background-color: #111827;
	color: #f3f4f6;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	border-radius: 0.5em;
	padding: 2em 2em;
	margin: 0px auto 3.5em auto;
	width: 725px;

	h1 {
		font-size: 2em;
		padding-bottom: 0.3em;
	}
	p {
		font-size: 1em;
		font-weight: 400;
		padding-bottom: 2em;
	}
`;
const StyledApplyNowButton = styled.button`
	background-color: rgb(119, 178, 85);
	border: none;
	outline: none;
	border-radius: 20px;
	padding: 10px 20px;

	a {
		color: #36454f;
		font-size: 1.1em;
		font-weight: 700;
		text-decoration: none;
	}
`;
