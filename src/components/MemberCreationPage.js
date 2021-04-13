import React, { useState } from "react";
import styled from "styled-components";

import { postMember } from "../helpers/crudMembers";
import { characterRace, characterClass, characterRank } from "../helpers/characterDescription";
import DropdownComponent from "./DropdownComponent";

const MemberCreationPage = () => {
	const [username, setUsername] = useState("");
	const [rank, setRank] = useState(characterRank[0]);
	const [classname, setClassname] = useState(characterClass[0]);
	const [race, setRace] = useState(characterRace[0]);
	const [success, setSuccess] = useState([]);
	const [error, setError] = useState({});

	const onAddSubmit = async () => {
		const testToken = localStorage.getItem("jwtToken");
		if (!testToken) {
			return;
		}
		const memberObj = JSON.stringify({
			username: username,
			rank: rank,
			classname: classname,
			race: race,
		});
		const response = await postMember(memberObj, JSON.parse(testToken).token);

		if (Array.isArray(response)) {
			setSuccess(response);
			setUsername("");
			setRank(characterRank[0]);
			setClassname(characterClass[0]);
			setRace(characterRace[0]);
		} else {
			setSuccess([]);
			setError(response);
		}
	};

	const renderResponse = () => {
		if (success[0]) {
			return (
				<StyledSuccessText>
					<p>Congratulations! You have created a Member 🦖</p>
					<p>
						User: {success[0].username}, Rank: {success[0].rank}, Class: {success[0].classname},
						Race: {success[0].race}
					</p>
					<p>Joined: {new Date(success[0].joined).toLocaleDateString("en-us")}</p>
				</StyledSuccessText>
			);
		} else {
			if (!error.details) return;
			return (
				<FailureText>
					<p>*Sorry, we could not create this member 😿*</p>
					<p>{error.details[0].message}</p>
				</FailureText>
			);
		}
	};

	return (
		<AddContainer>
			<AddForm>
				<h1>Add Member</h1>
				<StyledCreationLabel htmlFor="addCharUsername">Username</StyledCreationLabel>
				<StyledCreationInputField
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<DropdownComponent
					selected={rank}
					options={characterRank}
					onSelectedChange={setRank}
					label="Rank"
				/>
				<DropdownComponent
					selected={classname}
					options={characterClass}
					onSelectedChange={setClassname}
					label="Class"
				/>
				<DropdownComponent
					selected={race}
					options={characterRace}
					onSelectedChange={setRace}
					label="Race"
				/>
				<StyledAddSubmitBtn onClick={onAddSubmit}>Submit</StyledAddSubmitBtn>
				{renderResponse()}
			</AddForm>
		</AddContainer>
	);
};

export default MemberCreationPage;

const AddContainer = styled.div`
	background-color: #e5e7eb;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 200px 0px 300px 0px;
	height: 100%;
	width: 100%;
`;
const AddForm = styled.div`
	background-color: #f3f4f6;
	color: #111827;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border: 1px solid #111827;
	border-radius: 10px;
	padding: 2em 3em;
	width: clamp(300px, 40vw, 375px);

	h1 {
		align-self: center;
		font-size: 1.5em;
		font-weight: 700;
		margin-bottom: 1em;
	}
`;
const StyledCreationLabel = styled.label`
	color: #121212;
	margin: 10px 0px;
`;
const StyledCreationInputField = styled.input`
	background-color: #dedfe3;
	color: #111827;
	border: none;
	border-radius: 3px;
	padding: 10px;
	width: 100%;

	::placeholder {
		color: #9ca3af;
	}
`;
const StyledAddSubmitBtn = styled.button`
	background-color: rgb(119, 178, 85);
	color: #121212;
	border: 1px solid #111827;
	border-radius: 5px;
	padding: 1em;
	margin: 1.5em 0;
	width: 100%;
	cursor: pointer;
`;
const StyledSuccessText = styled.div`
	font-size: 8px;
	text-align: center;
	padding: 10px 5px 5px 5px;
`;
const FailureText = styled.div`
	font-size: 10px;
	font-weight: 700;
	text-align: center;
	padding: 10px 5px 5px 5px;
`;
