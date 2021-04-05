import React, { useState } from "react";
import { putMember } from "../helpers/crudMembers";
import styled from "styled-components";
// import { Link } from "react-router-dom";

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
			setEditResponse("There was an error, alphanumeric numbers only! 😿");
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
					<div className="edit-input-label">
						<label htmlFor="charRank">Rank</label>
						<input
							type="text"
							value={props.editRank}
							onChange={(e) => props.setEditRank(e.target.value)}
						/>
					</div>
					<div className="edit-input-label">
						<label htmlFor="charClassname">Classname</label>
						<input
							type="text"
							value={props.editClassname}
							onChange={(e) => props.setEditClassname(e.target.value)}
						/>
					</div>
					<div className="edit-input-label">
						<label htmlFor="charRace">Race</label>
						<input
							type="text"
							value={props.editRace}
							onChange={(e) => props.setEditRace(e.target.value)}
						/>
					</div>
				</div>
				{/* <Link to="/"> */}
				<button className="edit-btn" onClick={onEditSubmit}>
					Submit
				</button>
				{/* </Link> */}
				<p>{editResponse}</p>
			</div>
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
		color: rgb(255, 144, 21);
		font-size: 12px;
	}
	.edit-input-label {
		text-align: left;
	}
	.edit-input-fields-btn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: rgb(32, 32, 32);
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
`;
