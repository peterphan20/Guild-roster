import React, { useState, useEffect } from "react";
import { fetchMembers, removeMember } from "../helpers/crudMembers";
import styled from "styled-components";
import { randomBytes } from "crypto";
import { Link } from "react-router-dom";
import { sortByNameAndRank } from "../helpers/sortedList";

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
			<MemberCard key={parseInt(user.id)}>
				<HeaderCard>
					<div>
						<img
							src={`https://avatars.dicebear.com/api/avataaars/${avatarHash}.svg?r=50&m=4&b=%2334d399&w=70&h=70`}
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
					<DateJoined>{new Date(user.joined).toLocaleDateString("en-US")}</DateJoined>
					<DeleteEditBtn>
						<DeleteBtn onClick={(e) => handleClick(e.target.id)} id={user.id}>
							Delete
						</DeleteBtn>
						<Link to="/editmember">
							<EditBtn
								data-id={user.id}
								data-username={user.username}
								data-rank={user.rank}
								data-class={user.classname}
								data-race={user.race}
								onClick={(e) => handleEditClick(e)}
								className="guild-btn"
							>
								Edit
							</EditBtn>
						</Link>
					</DeleteEditBtn>
					<FooterIcon>
						<i className="fas fa-plus-circle healer"></i>
						<i className="fas fa-shield-alt tank"></i>
						<i className="fas fa-khanda dps"></i>
					</FooterIcon>
				</CardFooter>
			</MemberCard>
		);
	});

	return (
		<MemberFormUi>
			<GuildPage>
				<GuildIntroduction>
					<h1>Guild Roster</h1>
					<p>
						Founded in 2021, this is a guild roster app that allows users to see members from
						particular guilds. The user may enter different search parameters to search for specific
						members within said guild. The list will be sorted by ranks then usernames. This is a
						personal project for learning purposes and is not accepting contributions. You are
						welcome to modify and distribute any versions as you please. 🦕
					</p>
				</GuildIntroduction>
				<StyledSearchbar>
					<input
						className="guild-search"
						type="text"
						placeholder="Search"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</StyledSearchbar>
				<GuildCardContainer>
					{renderedList[0] ? mappedList : <Response>No users were found</Response>}
				</GuildCardContainer>
			</GuildPage>
		</MemberFormUi>
	);
};

export default GuildListContainer;

const MemberFormUi = styled.div` 
	background-color: #111827;
	min-height: 100%;
	min-width: 100%;
`;
const StyledSearchbar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	input {
		background-color: #d1d5db;
		color: #28282b;
		font-size: 20px;
		border: none;
		outline: none;
		border-radius: 6px;
		padding: 5px 250px 5px 10px;
	}
`;
const GuildPage = styled.div`
	background-color: #e5e7eb;
	margin-left: auto;
	margin-right: auto;
	padding-top: 100px;
	width: 60em;
`;
const GuildIntroduction = styled.div`
	color: #36454f;
	padding-left: 5em;
	padding-right: 5em;
	margin-bottom: 6em;
`;

const GuildCardContainer = styled.div`
	background-color: #1f2937;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 7px;
	column-gap: 7px;
	padding: 10px 0px;
	margin-top: 30px;
	margin-left: auto;
	margin-right: auto;
	width: 725px;
`;
const Response = styled.div`
	height: 600px;
`;
const MemberCard = styled.div`
	background-color: #111827;
	color: #f3f4f6;
	border: 1px solid #f3f4f6;
	padding-top: 8px;
	padding-left: 8px;
	width: 350px;
	height: 200px;
`;
const HeaderCard = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	h1,
	h2 {
		margin-left: 18px;
	}
	h1 {
		font-size: 20px;
		font-weight: 700;
	}
	h2 {
		color: #34d399;
		font-size: 18px;
		font-weight: 700;
		padding-bottom: 10px;
	}
`;
const CharacterDescription = styled.div`
	h3 {
		font-size: 12px;
		font-weight: 400;
	}
	h5 {
		font-size: 9px;
		font-weight: 400;
	}
`;
const CardFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 22px;
`;
const DateJoined = styled.p`
	font-size: 7px;
`;
const FooterIcon = styled.div`
	font-size: 12px;
	margin-right: 5px;

	i {
		margin-left: 2px;
		margin-right: 2px;
		cursor: pointer;
	}
	i:hover {
		transition: 0.2s ease;
		transform: scale(1.3);
	}
`;
const DeleteEditBtn = styled.div`
	opacity: 0;
	transition: opacity 0.35s ease;
	&:hover {
		opacity: 1;
	}
`;
const DeleteBtn = styled.button`
	background-color: #34d399;
	font-size: 8px;
	font-weight: 400;
	border: 1px solid darkslategray;
	border-radius: 10px;
	padding: 2.5px 9px;
	margin-right: 1.5px;
	cursor: pointer;
	&:hover {
		transition: 0.2s ease;
		transform: scale(1.1);
	}
`;
const EditBtn = styled.button`
	background-color: #34d399;
	font-size: 8px;
	font-weight: 400;
	border: 1px solid darkslategray;
	border-radius: 10px;
	padding: 2.5px 9px;
	margin-left: 1.5px;
	cursor: pointer;
	&:hover {
		transition: 0.2s ease;
		transform: scale(1.1);
	}
`;
