import React, { useState, useEffect } from "react";
import { randomBytes } from "crypto";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { tank, healer, dps } from "../helpers/characterRole";
import { fetchMembers, removeMember } from "../helpers/crudMembers";
import { sortByNameAndRank } from "../helpers/sortedList";
import GuildIntroduction from "./GuildIntroduction";

const GuildListContainer = ({
	setCurrentSelectedMember,
	setEditUsername,
	setEditRank,
	setEditClassname,
	setEditRace,
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

	const renderedList = sortByNameAndRank(results).filter((card) => {
		if (term === "") {
			return true;
		} else if (
			card.username.toLowerCase().includes(term.toLowerCase()) ||
			card.rank.toLowerCase().includes(term.toLowerCase()) ||
			card.classname.toLowerCase().includes(term.toLowerCase()) ||
			card.race.toLowerCase().includes(term.toLowerCase())
		) {
			return true;
		}
		return false;
	});

	const mappedList = renderedList.map((user) => {
		const avatarHash = randomBytes(20).toString("hex");
		return (
			<StyledMemberCard key={parseInt(user.id)} rendered>
				<HeaderCard>
					<div>
						<img
							src={`https://avatars.dicebear.com/api/avataaars/${avatarHash}.svg?r=50&m=4&b=%2377b255&w=70&h=70`}
							alt="randomly generated avatar"
						></img>
					</div>
					<div>
						<h1>{user.username}</h1>
						<h2>{user.rank}</h2>
					</div>
				</HeaderCard>
				<CharacterDescription>
					<h3>{user.classname}</h3>
					<h5>{user.race}</h5>
				</CharacterDescription>
				<CardFooter>
					<DateJoinedText>{new Date(user.joined).toLocaleDateString("en-US")}</DateJoinedText>
					<StyledDeleteEditBtn>
						<StyledDeleteBtn onClick={(e) => handleClick(e.target.id)} id={user.id}>
							Delete
						</StyledDeleteBtn>
						<Link to="/editmember">
							<button
								data-id={user.id}
								data-username={user.username}
								data-rank={user.rank}
								data-classname={user.classname}
								data-race={user.race}
								onClick={(e) => handleEditClick(e)}
							>
								Edit
							</button>
						</Link>
					</StyledDeleteEditBtn>
					<FooterIcons>
						{healer.includes(user.classname) ? <i className="fas fa-plus-circle healer"></i> : null}
						{tank.includes(user.classname) ? <i className="fas fa-shield-alt tank"></i> : null}
						{dps.includes(user.classname) ? <i className="fas fa-khanda dps"></i> : null}
					</FooterIcons>
				</CardFooter>
			</StyledMemberCard>
		);
	});

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
				<GuildCardContainer>
					{renderedList[0] ? (
						mappedList
					) : (
						<RenderedNoMemberResponse>No users were found</RenderedNoMemberResponse>
					)}
				</GuildCardContainer>
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
const GuildCardContainer = styled.div`
	background-color: #1f2937;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 10px;
	margin: 0px auto;
	width: 725px;
	min-height: 100%;
`;
const RenderedNoMemberResponse = styled.div`
	background-color: #e5e7eb;
	color: red;
	font-size: 1em;
	font-weight: 700;
	text-align: center;
	width: 100%;
	height: 50em;
`;
const StyledMemberCard = styled.div`
	background-color: #111827;
	color: #f3f4f6;
	border: 1px solid #f3f4f6;
	padding: 10px 10px;
	width: 350px;
	height: 200px;
`;
const HeaderCard = styled.header`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1em;

	h1 {
		font-size: 1.3em;
	}
	h2 {
		color: rgb(119, 178, 85);
		font-size: 1.2em;
		padding-bottom: 10px;
	}
`;
const CharacterDescription = styled.div`
	font-weight: 400;

	h3 {
		font-size: 1.1em;
	}
	h5 {
		font-size: 0.8em;
	}
`;
const CardFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 2em;
`;
const DateJoinedText = styled.p`
	font-size: 0.7em;
`;
const FooterIcons = styled.div`
	font-size: 1.2em;
	display: flex;
	gap: 10px;

	i:hover {
		transition: 0.2s ease;
		transform: scale(1.3);
		cursor: pointer;
	}
`;
const StyledDeleteEditBtn = styled.div`
	display: flex;
	gap: 6px;
	opacity: 0;
	transition: opacity 0.35s ease;

	a {
		color: #111827;
		text-decoration: none;
	}
	button {
		background-color: rgb(119, 178, 85);
		color: #111827;
		font-size: 0.6em;
		font-weight: 700;
		border: 1px solid #111827;
		outline: none;
		border-radius: 15px;
		padding: 5px 15px;
	}
	button:hover {
		cursor: pointer;
		transition: 0.3s ease;
		transform: scale(1.2);
	}
	&:hover {
		opacity: 1;
	}
`;
const StyledDeleteBtn = styled.button`
	cursor: pointer;
`;
