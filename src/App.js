import React, { useState } from "react";
import AddMember from "./components/AddMember";
import EditMember from "./components/EditMember";
import GuildList from "./components/GuildList";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	const [currentSelectedMember, setCurrentSelectedMember] = useState({});
	const [editUsername, setEditUsername] = useState("");
	const [editRank, setEditRank] = useState("");
	const [editClassname, setEditClassname] = useState("");
	const [editRace, setEditRace] = useState("");

	return (
		<Container className="guild-roster-container">
			<Router>
				<Switch>
					<Route
						path="/"
						exact
						component={GuildList}
						setCurrentSelectedMember={setCurrentSelectedMember}
						setEditRank={setEditRank}
						setEditClassname={setEditClassname}
						setEditRace={setEditRace}
						setEditUsername={setEditUsername}
					/>
					<Route path="/addmember" component={AddMember} />
					<Route
						path="/editmember"
						component={EditMember}
						currentSelectedMember={currentSelectedMember}
						editUsername={editUsername}
						editRank={editRank}
						editClassname={editClassname}
						editRace={editRace}
						setEditRank={setEditRank}
						setEditClassname={setEditClassname}
						setEditRace={setEditRace}
						setEditUsername={setEditUsername}
					/>
				</Switch>
			</Router>
		</Container>
	);
};

export default App;

const Container = styled.div`
	* {
		scroll-behavior: smooth;
		font-family: "Poppins", sans-serif;
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
	}
	input {
		padding: 10px;
		font-size: 18px;
		margin: 5px;
	}
	button {
		background-color: #fffae9;
		font-size: 11px;
		font-weight: 500;
		padding: 2px 9px;
		margin-left: 5px;
		margin-right: 5px;
		border-radius: 5px;
		cursor: pointer;
	}
	button:hover {
		transform: scale(1.1);
	}
`;
