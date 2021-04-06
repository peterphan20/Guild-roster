export const fetchMembers = async (cb) => {
	const res = await fetch("https://api-guildroster.herokuapp.com/members");
	const data = await res.json();
	cb(data);
};

export const postMember = async (memberObj) => {
	const res = await fetch("https://api-guildroster.herokuapp.com/members", {
		method: "POST",
		body: memberObj,
		headers: { "Content-Type": "application/json; charset=UTF-8" },
	});
	const data = await res.json();
	return data;
};

export const putMember = async (id, editMemberObj, token) => {
	console.log(editMemberObj);
	console.log(token);
	const res = await fetch(`https://api-guildroster.herokuapp.com/members/${id}`, {
		method: "PUT",
		body: JSON.stringify(editMemberObj),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`,
		},
	});
	const data = await res.json();
	return data;
};

export const removeMember = async (id, token) => {
	const res = await fetch(`https://api-guildroster.herokuapp.com/members/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`,
		},
	});
	const data = await res.json();
	return data;
};
