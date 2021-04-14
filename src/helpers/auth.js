export const fetchAuthToken = async (username, password) => {
	const response = await fetch("https://guildroster.herokuapp.com/auth/jwt/login", {
		method: "POST",
		body: JSON.stringify({
			username: username,
			password: password,
		}),
		headers: { "Content-Type": "application/json; charset=UTF-8" },
	});
	const data = await response.json();
	return data;
};

export const createAuthToken = async (signupUsername, signupPassword) => {
	const response = await fetch("https://guildroster.herokuapp.com/auth/jwt/signup", {
		method: "POST",
		body: JSON.stringify({
			username: signupUsername,
			password: signupPassword,
		}),
		headers: { "Content-Type": "application/json; charset=UTF-8" },
	});
	const data = await response.json();
	return data;
};

