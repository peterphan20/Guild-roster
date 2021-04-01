const CONTENT_TYPE_JSON = { "Content-Type": "application/json; charset=UTF-8" };

export const fetchMembers = async (cb) => {
	const res = await fetch("https://api-guildroster.herokuapp.com/members");
	const data = await res.json();
	cb(data);
};

export const postMember = async (memberObj) => {
	const res = await fetch("https://api-guildroster.herokuapp.com/members", {
		method: "POST",
		body: memberObj,
		headers: CONTENT_TYPE_JSON,
	});
	const data = await res.json();
	return data;
};

export const putMember = async (id, editMemberObj) => {
	const res = await fetch(`https://api-guildroster.herokuapp.com/members/${id}`, {
		method: "PUT",
		body: JSON.stringify(editMemberObj),
		headers: CONTENT_TYPE_JSON,
	});
	const data = await res.json();
	return data;
};

export const removeMember = async (id) => {
	const res = await fetch(`https://api-guildroster.herokuapp.com/members/${id}`, {
		method: "DELETE",
	});
	const data = await res.json();
	console.log(data);
};
