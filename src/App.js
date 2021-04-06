import React, { useState } from "react";
import AddMember from "./components/AddMember";
import EditMember from "./components/EditMember";
import GuildList from "./components/GuildList";
import styled from "styled-components";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	const [currentSelectedMember, setCurrentSelectedMember] = useState({});
	const [editUsername, setEditUsername] = useState("");
	const [editRank, setEditRank] = useState("");
	const [editClassname, setEditClassname] = useState("");
	const [editRace, setEditRace] = useState("");
	const [auth, setAuth] = useState({});

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
					<Route path="/signup" component={SignUp} />
					<Route path="/login">
						<Login auth={auth} setAuth={setAuth} />
					</Route>
				</Switch>
			</Router>
		</Container>
	);
};

export default App;

const Container = styled.div`
`;
