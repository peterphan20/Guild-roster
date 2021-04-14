import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { fetchMembers, removeMember } from "../helpers/crudMembers";
import GuildIntroduction from "./GuildIntroduction";
import RenderGuildMember from "./RenderGuildMember";

const GuildListContainer = ({
	setCurrentSelectedMember,
	setEditUsername,
	setEditRank,
	setEditClassname,
	setEditRace,
	auth,
}) => {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState([]);

	useEffect(() => {
		fetchMembers(setResults);
	}, []);

	const handleClick = (id) => {
		const testToken = localStorage.getItem("jwtToken");
		if (!testToken) {
			return;
		}
		const idArr = [...results].filter((user) => {
			return Number(user.id) !== Number(id);
		});
		setResults(idArr);
		removeMember(id, JSON.parse(testToken).token);
	};

	const handleEditClick = (e) => {
		let dataArr = Array.from(e.target.attributes);
		let memberId = dataArr[0].value;
		let username = dataArr[1].value;
		let rank = dataArr[2].value;
		let classname = dataArr[3].value;
		let race = dataArr[4].value;

		setEditUsername(username);
		setEditRank(rank);
		setEditClassname(classname);
		setEditRace(race);

		setCurrentSelectedMember({
			memberId: memberId,
			username: username,
			rank: rank,
			classname: classname,
			race: race,
		});
	};

	return (
		<StyledRosterPageContainer>
			<GuildPage>
				<GuildIntroduction />
				<StyledMemberText>
					<span>Guild Members</span>
				</StyledMemberText>
				<StyledSearchbar>
					<input
						className="guild-search"
						type="text"
						placeholder="Search guild member"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</StyledSearchbar>
				<StyledHandleAuthResponse>
					{auth.username ? "" : "Please sign in if you wish to have delete and edit functionality"}
				</StyledHandleAuthResponse>
				<RenderGuildMember
					results={results}
					term={term}
					handleClick={handleClick}
					handleEditClick={handleEditClick}
					auth={auth}
				></RenderGuildMember>
			</GuildPage>
		</StyledRosterPageContainer>
	);
};

export default GuildListContainer;

const StyledRosterPageContainer = styled.div`
	background-color: #111827;
`;
const GuildPage = styled.div`
	background-color: #e5e7eb;
	margin-left: auto;
	margin-right: auto;
	padding-top: 100px;
	padding-bottom: 50px;
	width: 55em;
	height: 100%;
	min-height: 1500px;

	h1,
	h2 {
		font-weight: 700;
	}
`;

const StyledMemberText = styled.p`
	color: #36454f;
	line-height: 0.5;
	text-align: center;
	margin-bottom: 3.5em;

	span {
		color: #36454f;
		display: inline-block;
		position: relative;
	}
	span:before,
	span:after {
		content: "";
		position: absolute;
		height: 5px;
		border-top: 1px solid #36454f;
		margin-top: 0.2em;
		width: 19em;
	}
	span:before {
		right: 100%;
		margin-right: 15px;
	}
	span:after {
		left: 100%;
		margin-left: 15px;
	}
`;
const StyledSearchbar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;
	width: 100%;

	input {
		background-color: #d1d5db;
		color: #36454f;
		font-size: 1.7em;
		border: none;
		outline: none;
		border-radius: 6px;
		padding: 10px 20px;
		width: 20em;
	}
`;
const StyledHandleAuthResponse = styled.div`
	font-weight: 700;
	text-align: center;
	margin-bottom: 2em;
`;
