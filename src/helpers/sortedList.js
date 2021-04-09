const sortByName = (arr) => arr.sort((a, b) => (a.username < b.username ? -1 : 1));
export const sortByNameAndRank = (arr) => {
	let guildMaster = "";
	const officers = [];
	const members = [];
	const peons = [];
	for (let i = 0; i < arr.length; i++) {
		switch (arr[i].rank) {
			case "Officer":
				officers.push(arr[i]);
				break;
			case "Member":
				members.push(arr[i]);
				break;
			case "Peon":
				peons.push(arr[i]);
				break;
			case "Guild Master":
				guildMaster = arr[i];
				break;
			default:
				break;
		}
	}

	const sortedOfficers = sortByName(officers);
	const sortedMembers = sortByName(members);
	const sortedPeons = sortByName(peons);
	const result = [guildMaster, ...sortedOfficers, ...sortedMembers, ...sortedPeons];
	return result;
};

