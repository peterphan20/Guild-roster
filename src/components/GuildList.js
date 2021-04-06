import React, { useState, useEffect } from "react";
import { fetchMembers, removeMember } from "../helpers/crudMembers";
import styled from "styled-components";
import { randomBytes } from "crypto";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const GuildList = ({
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
		const idArr = [...results].filter((user) => {
			return Number(user.id) !== Number(id);
		});
		setResults(idArr);
		removeMember(id);
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

		window.scrollTo(0, 0);
		setCurrentSelectedMember({
			memberId: memberId,
			username: username,
			rank: rank,
			classname: classname,
			race: race,
		});
	};

	const renderedList = results
		.filter((card) => {
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
		})
		.map((user) => {
			const avatarHash = randomBytes(20).toString("hex");
			return (
				<MemberCard key={user.id}>
					<HeaderCard>
						<div className="avatar">
							<img
								src={`https://avatars.dicebear.com/api/avataaars/${avatarHash}.svg?r=50&m=4&b=%23ff9015&w=60&h=60`}
								alt="randomly generated avatar"
							></img>
						</div>
						<div className="member-info">
							<h1>{user.username}</h1>
							<h2>{user.rank}</h2>
						</div>
					</HeaderCard>
					<CharacterDescription className="member-class-race">
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
						<FooterIcon className="member-icon">
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
			<Navbar>
				<Searchbar>
					<input
						className="guild-search"
						type="text"
						placeholder="Search"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</Searchbar>
				<Nav />
			</Navbar>
			<GuildCardContainer>{renderedList}</GuildCardContainer>
		</MemberFormUi>
	);
};

export default GuildList;

const MemberFormUi = styled.div`
	background-color: #121212;
	display: grid;
	place-items: center;
	min-height: 100%;
	min-width: 100%;
`;
const Navbar = styled.div`
	position: fixed;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #1a1a1a;
	margin-top: 0;
	margin-bottom: 30px;
	width: 100%;
	height: 2.6rem;
`;
const Searchbar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	input {
		border: none;
		border-radius: 6px;
		padding: 3px 150px 3px 5px;
		margin-left: 14rem;
	}
`;
const GuildCardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 0.5em;
	background-color: rgb(27, 27, 27);
	box-shadow: 0 2px 5px 1px rgb(64 60 67 / 40%);
	padding: 5px;
	margin-top: 60px;
	margin-bottom: 40px;
	width: 50%;
`;
const MemberCard = styled.div`
	background-color: rgb(32, 32, 32);
	color: #fffae9;
	border: 1px solid rgb(24, 24, 24);
	padding-top: 5px;
	padding-left: 9px;
	width: 263px;
	height: 150px;
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
		color: rgb(255, 144, 21);
		font-size: 18px;
		font-weight: 600;
		padding-bottom: 10px;
	}
`;
const CharacterDescription = styled.div`
	h3 {
		font-size: 12px;
		font-weight: 500;
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
	margin-top: 18px;
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
	background-color: rgb(255, 144, 21);
	font-size: 8px;
	font-weight: 500;
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
	background-color: rgb(255, 144, 21);
	font-size: 8px;
	font-weight: 500;
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
/*

	.guild-member-card {


		margin-left: auto;
		margin-right: auto;
		padding: 10px;
		width: 80%;
		overflow-x: hidden;
	}


	.member-info {
		margin-left: 15px;
	}
	.member-info h2 {
		font-size: 1.5em;
		font-weight: 500;

	}
	.member-class-race {
		text-align: left;
		margin-top: 15px;
		margin-left: 10px;
	}
	.member-class-race h3 {
		font-size: 1.6em;
	}
	.member-class-race h5 {
		font-size: 1em;
	}
	.member-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 18px;
		margin-left: 10px;
		margin-right: 10px;
	}
	.member-footer p {
		font-size: 12px;
		font-weight: 300;
	}
	.member-icon i {
		font-size: 16px;
		margin-left: 3px;
		margin-right: 3px;
	}
*/
