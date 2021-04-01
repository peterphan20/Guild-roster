import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import { fetchMembers, removeMember } from "../helpers/crudMembers";

const GuildList = ({ setCurrentSelectedMember }) => {
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
		return (
			<div key={user.id} className="member-content">
				<div className="header">
					<h1>{user.username}</h1>
					<h2>{user.rank}</h2>
				</div>
				<div className="member-info">
					<h4>{user.class}</h4>
					<h4>{user.race}</h4>
				</div>
				<div className="member-footer">
					<p>{new Date(user.joined).toLocaleDateString("en-US")}</p>
				</div>
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
		);
	});

	return (
		<div className="form-ui">
			<Searchbar />
			<div className="guild-list">{renderedList}</div>
		</div>
	);
};

export default GuildList;
