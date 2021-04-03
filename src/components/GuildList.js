import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import { fetchMembers, removeMember } from "../helpers/crudMembers";
import styled from "styled-components";
import { randomBytes } from "crypto";

const GuildList = ({
	setCurrentSelectedMember,
	setEditUsername,
	setEditRank,
	setEditRace,
	setEditClassname,
}) => {
	const healers = ["druid", "monk", "paladin", "priest", "shaman"];
	const tanks = ["deathknight", "demonhunter", "druid", "monk", "paladin", "warrior"];
	const dps = [
		"deathknight",
		"demonhunter",
		"druid",
		"hunter",
		"mage",
		"monk",
		"paladin",
		"priest",
		"rogue",
		"shaman",
		"warlock",
		"warrior",
	];

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

		setEditRace(race);
		setEditClassname(classname);
		setEditRank(rank);
		setEditUsername(username);

		window.scrollTo(0, 0);
		setCurrentSelectedMember({
			memberId: memberId,
			username: username,
			rank: rank,
			classname: classname,
			race: race,
		});
	};

	const renderedList = results.map((user) => {
		const avatarHash = randomBytes(20).toString("hex");
		return (
			<div key={user.id} className="member-content">
				<div className="header">
					<div className="avatar">
						<img
							src={`https://avatars.dicebear.com/api/avataaars/${avatarHash}.svg?r=50&m=4&b=%23ff9015&w=110&h=110`}
						></img>
					</div>
					<div className="member-info">
						<h1>{user.username}</h1>
						<h2>{user.rank}</h2>
					</div>
				</div>
				<div className="member-class-race">
					<h3>{user.classname}</h3>
					<h5>{user.race}</h5>
				</div>

				<div className="member-footer">
					<p>{new Date(user.joined).toLocaleDateString("en-US")}</p>
					<div className="delete-edit-btn">
						<button onClick={(e) => handleClick(e.target.id)} id={user.id}>
							Delete
						</button>
						<button
							data-id={user.id}
							data-username={user.username}
							data-rank={user.rank}
							data-class={user.class}
							data-race={user.race}
							onClick={(e) => handleEditClick(e)}
						>
							Edit
						</button>
					</div>
					<div className="member-icon">
						<i className="fas fa-plus-circle"></i>
						<i className="fas fa-shield-alt"></i>
						<i className="fas fa-khanda"></i>
					</div>
				</div>
			</div>
		);
	});

	return (
		<MemberCard className="form-ui">
			<Searchbar />
			<div className="guild-member-card">{renderedList}</div>
		</MemberCard>
	);
};

export default GuildList;

const MemberCard = styled.div`
	.guild-member-card {
		background-color: rgb(27, 27, 27);
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		grid-gap: 10px;
	}
	.member-content {
		color: #fffae9;
		text-align: center;
		background-color: rgb(32, 32, 32);
		border: 1px solid black;
		padding: 10px;
		width: 450px;
		height: 300px;
		opacity: 1;
	}
	.header {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		text-align: left;
		margin-top: 10px;
	}
	.member-info {
		margin-left: 25px;
	}
	.member-info h2 {
		font-size: 1.5em;
		font-weight: 500;
		color: rgb(255, 144, 21);
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
		margin-top: 30px;
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
`;
