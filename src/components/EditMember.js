import React, { useState } from "react";
import { putMember } from "../helpers/crudMembers";

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
		<div>
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
		</div>
	);
};

export default EditMember;
