import React, { useState } from "react";
import { postMember } from "../helpers/crudMembers";
import styled from "styled-components";

const AddMember = ({ auth }) => {
	const [username, setUsername] = useState("");
	const [rank, setRank] = useState("");
	const [classname, setClassname] = useState("");
	const [race, setRace] = useState("");
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
		console.log("this is the response", response);

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
		if (!auth) {
			console.log("checking for auth", auth);
			return <p>You are not signed in!</p>;
		}
		if (success[0]) {
			return (
				<SuccessText>
					<p className="success-msg-header">Congratulations! You have created a Member 🦖</p>
					<p className="success-msg">
						User: {success[0].username}, Rank: {success[0].rank}, Class: {success[0].classname},
						Race: {success[0].race}
					</p>
					<p className="success-msg">
						Joined: {new Date(success[0].joined).toLocaleDateString("en-us")}
					</p>
				</SuccessText>
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
			<AddMemberh1>Add Member</AddMemberh1>
			<AddForm>
				<InputLabelFields>
					<Label htmlFor="addCharUsername">Username</Label>
					<InputField
						type="text"
						required
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<Label htmlFor="addCharRank">Rank</Label>
					<InputField type="text" required value={rank} onChange={(e) => setRank(e.target.value)} />
					<Label htmlFor="addCharClassname">Classname</Label>
					<InputField
						type="text"
						required
						value={classname}
						onChange={(e) => setClassname(e.target.value)}
					/>
					<Label htmlFor="addCharRace">Race</Label>
					<InputField type="text" required value={race} onChange={(e) => setRace(e.target.value)} />
				</InputLabelFields>
				<AddButton onClick={onAddSubmit}>Submit</AddButton>
				{renderResponse()}
			</AddForm>
		</AddContainer>
	);
};

export default AddMember;

const AddContainer = styled.div`
	background-color: #63738a;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100%;
	min-width: 100%;
`;
const AddMemberh1 = styled.h1`
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
const AddForm = styled.div`
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
const FailureText = styled.div`
	font-size: 8px;
	font-weight: 600;
	text-align: center;
	padding: 10px 5px 4px 5px;
`;
