import React, {useState} from "react";
import AddMember from "./components/AddMember";
import EditMember from "./components/EditMember";
import GuildList from "./components/GuildList";

const App = () => {
  const [currentSelectedMember, setCurrentSelectedMember] = useState({})

	return (
		<div>
			<AddMember />
      <EditMember currentSelectedMember={currentSelectedMember} />
			<GuildList setCurrentSelectedMember={setCurrentSelectedMember} />
		</div>
	);
};

export default App;
