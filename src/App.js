import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MemberCreationPage from "./components/MemberCreationPage";
import MemberEditPage from "./components/MemberEditPage";
import MemberSignupPage from "./components/MemberSignupPage";
import MemberLoginPage from "./components/MemberLoginPage";
import GuildListContainer from "./components/GuildListContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
	const [currentSelectedMember, setCurrentSelectedMember] = useState({});
	const [editUsername, setEditUsername] = useState("");
	const [editRank, setEditRank] = useState("");
	const [editClassname, setEditClassname] = useState("");
	const [editRace, setEditRace] = useState("");
	const [auth, setAuth] = useState({});

	return (
		<Container>
			<Router>
				<NavBar auth={auth} setAuth={setAuth} />
				<Switch>
					<Route path="/" exact>
						<GuildListContainer
							auth={auth}
							setCurrentSelectedMember={setCurrentSelectedMember}
							setEditRank={setEditRank}
							setEditClassname={setEditClassname}
							setEditRace={setEditRace}
							setEditUsername={setEditUsername}
						/>
					</Route>
					<Route path="/addmember">
						<MemberCreationPage auth={auth} />
					</Route>
					<Route path="/editmember">
						<MemberEditPage
							auth={auth}
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
					<Route path="/signup" component={MemberSignupPage} />
					<Route path="/login">
						<MemberLoginPage auth={auth} setAuth={setAuth} />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</Container>
	);
};

export default App;

const Container = styled.div`
	width: 100%;
	height: 100%;
`;
