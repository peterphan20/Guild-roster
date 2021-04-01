import React, { useState } from "react";
import { postMember } from "../helpers/crudMembers";

const AddMember = () => {
	const [username, setUsername] = useState("");
	const [rank, setRank] = useState("");
	const [classname, setClassname] = useState("");
	const [race, setRace] = useState("");
	const [success, setSuccess] = useState([]);
	const [error, setError] = useState({});

	const onAddSubmit = async () => {
		const memberObj = JSON.stringify({
			username: username,
			rank: rank,
			classname: classname,
			race: race,
		});

		const response = await postMember(memberObj);

		if (Array.isArray(response)) {
			setSuccess(response);
			setUsername("");
			setRank("");
			setClassname("");
			setRace("");
		} else {
			setSuccess([]);
			setError(response);
		}
	};

	const renderResponse = () => {
		if (success[0]) {
			return (
				<div>
					<h1>Congratulations! You have created a Member</h1>
					<p>User: {success[0].username}</p>
					<p>Rank: {success[0].rank}</p>
					<p>Class: {success[0].class}</p>
					<p>Race: {success[0].race}</p>
					<p>Joined: {new Date(success[0].joined).toLocaleDateString("en-us")}</p>
				</div>
			);
		} else {
			if (!error.details) return;
			return (
				<div>
					<h1>Sorry, we could not create this member D:</h1>
					<p>{error.details[0].message}</p>
				</div>
			);
		}
	};

	return (
		<div className="add-member-form">
			<h1>Add Member</h1>
			<br />
			<input
				type="text"
				placeholder="Username"
				required
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<br />
			<input
				type="text"
				placeholder="Rank"
				required
				value={rank}
				onChange={(e) => setRank(e.target.value)}
			/>
			<br />
			<input
				type="text"
				placeholder="Class"
				required
				value={classname}
				onChange={(e) => setClassname(e.target.value)}
			/>
			<br />
			<input
				type="text"
				placeholder="Race"
				required
				value={race}
				onChange={(e) => setRace(e.target.value)}
			/>
			<br />
			<button onClick={onAddSubmit} className="add-btn">
				Submit
			</button>
			{renderResponse()}
		</div>
	);
};

export default AddMember;
