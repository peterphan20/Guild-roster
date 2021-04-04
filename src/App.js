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
					<Route path="/" exact>
						<GuildList
							setCurrentSelectedMember={setCurrentSelectedMember}
							setEditRank={setEditRank}
							setEditClassname={setEditClassname}
							setEditRace={setEditRace}
							setEditUsername={setEditUsername}
						/>
					</Route>
					<Route path="/addmember" component={AddMember} />
					<Route path="/editmember">
						<EditMember
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
					</Route>
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
`;
