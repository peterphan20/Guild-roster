import React, { useState } from "react";
import styled from "styled-components";

import { putMember } from "../helpers/crudMembers";
import { characterRace, characterClass, characterRank } from "../helpers/characterDescription";
import DropdownComponent from "./DropdownComponent";

const MemberEditPage = ({
	currentSelectedMember,
	editUsername,
	editRank,
	editClassname,
	editRace,
	setEditRank,
	setEditClassname,
	setEditRace,
	setEditUsername,
	username,
	password,
	auth,
}) => {
	const [editResponse, setEditResponse] = useState("");
	const { memberId } = currentSelectedMember;

	const onEditSubmit = async () => {
		const testToken = localStorage.getItem("jwtToken");
		if (!testToken) {
			return;
		}
		const editMemberObj = {
			username: editUsername,
			rank: editRank,
			classname: editClassname,
			race: editRace,
		};
		const response = await putMember(memberId, editMemberObj, JSON.parse(testToken).token);
		if (!auth.username) {
			setEditResponse("Please Sign In!");
		} else if (!response.details) {
			// successful put request
			setEditResponse("Member successfully edited! ✔️");
		} else {
			// else not successfull
			setEditResponse("There was an error, alphanumeric characters only! 😿");
		}
	};

	return (
		<EditContainer>
			<EditForm>
				<h1>Edit Member</h1>
				<StyledUsernameLabel htmlFor="charUsername">Username</StyledUsernameLabel>
				<StyledUsernameInputField
					type="text"
					value={editUsername}
					onChange={(e) => setEditUsername(e.target.value)}
					placeholder="Username"
					required
				/>
				<DropdownComponent
					selected={editRank}
					options={characterRank}
					onSelectedChange={setEditRank}
					label="Rank"
				/>
				<DropdownComponent
					selected={editClassname}
					options={characterClass}
					onSelectedChange={setEditClassname}
					label="Rank"
				/>
				<DropdownComponent
					selected={editRace}
					options={characterRace}
					onSelectedChange={setEditRace}
					label="Rank"
				/>
				<StyledEditSubmitbtn className="edit-btn" onClick={onEditSubmit}>
					Submit
				</StyledEditSubmitbtn>
				<SuccessText>{editResponse}</SuccessText>
			</EditForm>
		</EditContainer>
	);
};

export default MemberEditPage;

const EditContainer = styled.div`
	background-color: #e5e7eb;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 200px 0px 300px 0px;
	height: 100%;
	width: 100%;
`;
const EditForm = styled.div`
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
const StyledUsernameLabel = styled.label`
	color: #121212;
	margin: 10px 0px;
`;
const StyledUsernameInputField = styled.input`
	background-color: #dedfe3;
	color: #111827;
	border: none;
	border-radius: 3px;
	padding: 10px;
	width: 100%;
`;
const StyledEditSubmitbtn = styled.button`
	background-color: rgb(119, 178, 85);
	color: #121212;
	border: 1px solid #111827;
	border-radius: 5px;
	padding: 0.8em;
	margin: 1.5em 0;
	width: 100%;
	cursor: pointer;
`;
const SuccessText = styled.div`
	font-size: 0.8em;
	align-self: center;
	padding: 10px 0;
`;
