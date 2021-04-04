import React, { useState } from "react";
import { postMember } from "../helpers/crudMembers";
import styled from "styled-components";

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
					<p className="success-msg-header">Congratulations! You have created a Member 🦖</p>
					<p className="success-msg">
						User: {success[0].username}, Rank: {success[0].rank}, Class: {success[0].classname},
						Race: {success[0].race}
					</p>
					<p className="success-msg">
						Joined: {new Date(success[0].joined).toLocaleDateString("en-us")}
					</p>
				</div>
			);
		} else {
			if (!error.details) return;
			return (
				<div>
					<p>*Sorry, we could not create this member 😿*</p>
					<p>{error.details[0].message}</p>
				</div>
			);
		}
	};

	return (
		<AddContainer className="add-member-form">
			<h1>Add Member</h1>
			<div className="add-input-fields-btn">
				<div className="add-input-fields">
					<div className="add-input-label">
						<label htmlFor="addCharUsername">Username</label>
						<input
							type="text"
							required
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<label htmlFor="addCharRank">Rank</label>
					<div className="add-input-label">
						<input type="text" required value={rank} onChange={(e) => setRank(e.target.value)} />
					</div>
					<div className="add-input-label">
						<label htmlFor="addCharClassname">Classname</label>
						<input
							type="text"
							required
							value={classname}
							onChange={(e) => setClassname(e.target.value)}
						/>
					</div>
					<div className="add-input-label">
						<label htmlFor="addCharRace">Race</label>
						<input type="text" required value={race} onChange={(e) => setRace(e.target.value)} />
					</div>
				</div>
				<button onClick={onAddSubmit} className="add-btn">
					Submit
				</button>
				{renderResponse()}
			</div>
		</AddContainer>
	);
};

export default AddMember;

const AddContainer = styled.div`
	h1 {
		background-color: rgb(32, 32, 32);
		color: rgb(255, 144, 21);
		text-align: center;
		font-weight: 600;
		font-size: 40px;
		border-top: 1px solid black;
		border-left: 1px solid black;
		border-right: 1px solid black;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
		margin-top: 100px;
		margin-left: auto;
		margin-right: auto;
		padding: 10px;
		width: 24%;
	}
	label {
		color: rgb(255, 144, 21);
		font-size: 12px;
		text-align: left;
		margin-left: 5px;
	}
	input {
		background-color: #fffae9;
		display: block;
		color: darkslategray;
		border: none;
		padding: 6px;
		font-size: 13px;
		border-radius: 5px;
		margin-top: 5px;
		margin-bottom: 3px;
		width: 270px;
	}
	button {
		background-color: rgb(255, 144, 21);
		font-size: 13px;
		font-weight: 500;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		padding: 8px 20px;
		width: 270px;
		margin-top: 26px;
		margin-bottom: 25px;
	}
	p {
		font-size: 12px;
		color: rgb(255, 144, 21);
		text-align: center;
	}
	.add-input-label {
		text-align: left;
	}
	.add-input-fields-btn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: rgb(27, 27, 27);
		border-bottom: 1px solid black;
		border-left: 1px solid black;
		border-right: 1px solid black;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;
		margin-left: auto;
		margin-right: auto;
		padding-top: 20px;
		padding-bottom: 10px;
		padding-right: 10px;
		padding-left: 10px;
		width: 24%;
	}
	.success-msg-header {
		font-size: 13px;
	}
	.success-msg {
		font-size: 9px;
	}
`;
