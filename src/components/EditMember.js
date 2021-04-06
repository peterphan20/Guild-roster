import React, { useState } from "react";
import { putMember } from "../helpers/crudMembers";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const EditMember = (props) => {
	const [editResponse, setEditResponse] = useState("");
	const { memberId } = props.currentSelectedMember;

	const onEditSubmit = async () => {
		const testToken = localStorage.getItem("jwtToken");
		console.log("checking to see if token is stored", testToken);
		if (!testToken) {
			return;
		}
		const editMemberObj = {
			username: props.editUsername,
			rank: props.editRank,
			classname: props.editClassname,
			race: props.editRace,
		};
		const response = await putMember(memberId, editMemberObj, JSON.parse(testToken).token);
		if (!props.username || !props.password) {
			setEditResponse("Please Sign In!");
		} else if (!response.details) {
			// successful put request
			setEditResponse("Member successfully edited! ✔️");
		} else {
			// else not successfull
			setEditResponse("There was an error, alphanumeric numbers only! 😿");
		}
	};

	return (
		<EditContainer>
			<EditMemberh1>Edit Member</EditMemberh1>
			<EditForm className="edit-input-fields-btn">
				<InputLabelFields className="edit-input-fields">
					<Label htmlFor="charUsername">Username</Label>
					<InputField
						type="text"
						id="charUsername"
						value={props.editUsername}
						onChange={(e) => props.setEditUsername(e.target.value)}
						required
					/>
					<Label htmlFor="charRank">Rank</Label>
					<InputField
						type="text"
						value={props.editRank}
						onChange={(e) => props.setEditRank(e.target.value)}
						required
					/>
					<Label htmlFor="charClassname">Classname</Label>
					<InputField
						type="text"
						value={props.editClassname}
						onChange={(e) => props.setEditClassname(e.target.value)}
						required
					/>
					<Label htmlFor="charRace">Race</Label>
					<InputField
						type="text"
						value={props.editRace}
						onChange={(e) => props.setEditRace(e.target.value)}
						required
					/>
				</InputLabelFields>
				{/* <Link to="/"> */}
				<AddButton className="edit-btn" onClick={onEditSubmit}>
					Submit
				</AddButton>
				{/* </Link> */}
				<SuccessText>{editResponse}</SuccessText>
			</EditForm>
		</EditContainer>
	);
};

export default EditMember;

const EditContainer = styled.div`
	background-color: #121212;
	min-height: 100%;
	min-width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const EditMemberh1 = styled.h1`
	background-color: #a66a89;
	color: #121212;
	text-align: center;
	font-weight: 600;
	font-size: 18px;
	border-top: 1px solid black;
	border-left: 1px solid black;
	border-right: 1px solid black;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	padding: 10px;
	width: 21%;
`;
const EditForm = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #f2f3f7;
	border-bottom: 1px solid black;
	border-left: 1px solid black;
	border-right: 1px solid black;
	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
	padding-top: 10px;
	padding-bottom: 10px;
	width: 21%;
`;
const InputLabelFields = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;
const Label = styled.label`
	color: #121212;
	font-size: 10px;
	font-weight: 400;
	margin-top: 5px;
	margin-bottom: 3px;
`;
const InputField = styled.input`
	background-color: #dedfe3;
	color: darkslategray;
	display: block;
	border: none;
	font-size: 12px;
	border-radius: 3px;
	padding: 3px 25px 3px 5px;
`;
const AddButton = styled.button`
	background-color: #a66a89;
	color: #121212;
	font-size: 10px;
	font-weight: 400;
	border: 1px solid darkslategray;
	border-radius: 5px;
	padding: 2.5px 15px;
	margin-top: 11px;
	cursor: pointer;
`;
const SuccessText = styled.div`
	font-size: 8px;
	font-weight: 500;
	text-align: center;
	padding: 10px 5px 4px 5px;
`;
