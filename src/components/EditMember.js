import React, { useState, useEffect } from "react";
import { putMember } from "../helpers/crudMembers";

const EditMember = (props) => {
	const [editUsername, setEditUsername] = useState("");
	const [editRank, setEditRank] = useState("");
	const [editClassname, setEditClassname] = useState("");
	const [editRace, setEditedRace] = useState("");
	const [editResponse, setEditResponse] = useState("");

  const { memberId, username, rank, classname, race } = props.currentSelectedMember;
  
	useEffect(() => {
		setEditUsername(username);
		setEditRank(rank);
		setEditClassname(classname);
		setEditedRace(rank);
	}, [username, rank, classname, race]);

	const onEditSubmit = async () => {
		const editMemberObj = {
			username: editUsername,
			rank: editRank,
			classname: editClassname,
			race: editRace,
		};
		const response = await putMember(memberId, editMemberObj);
		if (!response.details) {
			// successful put request
			setEditResponse("Member successfully edited!");
		} else {
			// else not successfull
			setEditResponse("There was an error D:");
		}
	};

	return (
		<div>
			<h1>Edit Member</h1>
			<input type="text" value={editUsername} onChange={(e) => setEditUsername(e.target.value)} />
			<br />
			<input type="text" value={editRank} onChange={(e) => setEditRank(e.target.value)} />
			<br />
			<input type="text" value={editClassname} onChange={(e) => setEditClassname(e.target.value)} />
			<br />
			<input type="text" value={editRace} onChange={(e) => setEditedRace(e.target.value)} />
			<br />
			<button onClick={onEditSubmit}>Submit</button>
			<h2>{editResponse}</h2>
		</div>
	);
};

export default EditMember;
