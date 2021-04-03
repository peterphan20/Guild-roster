import React, { useState } from "react";
import { putMember } from "../helpers/crudMembers";
import styled from "styled-components";
import { Link } from "react-router-dom";

const EditMember = (props) => {
	const [editResponse, setEditResponse] = useState("");

	const onEditSubmit = async () => {
		const editMemberObj = {
			username: props.editUsername,
			rank: props.editRank,
			classname: props.editClassname,
			race: props.editRace,
		};
		const response = await putMember(props.currentSelectedMember, editMemberObj);
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
			<div className="edit-input-fields-btn">
				<div className="edit-input-fields">
					<div className="edit-input-label">
					<label htmlFor="charUsername">Username</label>
					<input
						type="text"
						id="charUsername"
						value={props.editUsername}
						onChange={(e) => props.setEditUsername(e.target.value)}
					/>
					</div>

					<input
						type="text"
						value={props.editRank}
						onChange={(e) => props.setEditRank(e.target.value)}
					/>

					<input
						type="text"
						value={props.editClassname}
						onChange={(e) => props.setEditClassname(e.target.value)}
					/>

					<input
						type="text"
						value={props.editRace}
						onChange={(e) => props.setEditRace(e.target.value)}
					/>
				</div>

				<Link to="/">
					<button onClick={onEditSubmit}>Submit</button>
				</Link>
			</div>
			<h2>{editResponse}</h2>
		</EditContainer>
	);
};

export default EditMember;

const EditContainer = styled.div`

	h1 {
		background-color: rgb(27, 27, 27);
		color: rgb(255, 144, 21);
		text-align: center;
		font-weight: 600;
		font-size: 40px;
		border-top: 1px solid black;
		border-left: 1px solid black;
		border-right: 1px solid black;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
	}
	input {
		color: darkslategray;
	}
	.edit-input-fields-btn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: rgb(32, 32, 32);
	}
`;
