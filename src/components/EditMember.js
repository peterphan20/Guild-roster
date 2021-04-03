import React, { useState } from "react";
import { putMember } from "../helpers/crudMembers";
import styled from "styled-components";

const EditMember = (props) => {
	const [editResponse, setEditResponse] = useState("");
	const { memberId } = props.currentSelectedMember;

	const onEditSubmit = async () => {
		const editMemberObj = {
			username: props.editUsername,
			rank: props.editRank,
			classname: props.editClassname,
			race: props.editRace,
		};
		const response = await putMember(memberId, editMemberObj);
		if (!response.details) {
			// successful put request
			setEditResponse("Member successfully edited! ✔️");
		} else {
			// else not successfull
			setEditResponse("There was an error 😿");
		}
	};

	return (
		<EditContainer>
			<h1>Edit Member</h1>
			<input
				type="text"
				value={props.editUsername}
				onChange={(e) => props.setEditUsername(e.target.value)}
			/>
			<br />
			<input
				type="text"
				value={props.editRank}
				onChange={(e) => props.setEditRank(e.target.value)}
			/>
			<br />
			<input
				type="text"
				value={props.editClassname}
				onChange={(e) => props.setEditClassname(e.target.value)}
			/>
			<br />
			<input
				type="text"
				value={props.editRace}
				onChange={(e) => props.setEditRace(e.target.value)}
			/>
			<br />
			<button onClick={onEditSubmit}>Submit</button>
			<h2>{editResponse}</h2>
		</EditContainer>
	);
};

export default EditMember;

const EditContainer = styled.div`
	background-color: rgb(27, 27, 27);
`;
