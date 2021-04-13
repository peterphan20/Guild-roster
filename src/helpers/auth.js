const CONTENT_TYPE_JSON = { "Content-Type": "application/json; charset=UTF-8" };

export const fetchAuthToken = async (username, password) => {
	const response = await fetch("https://guildroster.herokuapp.com/auth/jwt/login", {
		method: "POST",
		body: JSON.stringify({
			username: username,
			password: password,
		}),
		headers: CONTENT_TYPE_JSON,
	});
	const data = await response.json();
	return data;
};

export const createAuthToken = async (name, username, password) => {
	const response = await fetch("https://api-guildroster.herokuapp.com/auth/jwt/signup", {
		method: "POST",
		body: JSON.stringify({
			name: name,
			username: username,
			password,
			password,
		}),
		headers: CONTENT_TYPE_JSON,
	});
	const data = await response.json();
	return data;
};

export const testAuth = async (token) => {
	const response = await fetch("https://guildroster.herokuapp.com/auth/jwt/test", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	const data = await response.json();
	return data;
};
