import React, { useState, useEffect } from "react";

const Searchbar = () => {
	const [Term, setTerm] = useState("");

	useEffect(() => {
		const timerId = setTimeout(() => {
			setTerm(Term);
		}, 500);

		return () => {
			clearTimeout(timerId);
		};
	}, [Term]);

	return (
		<div>
			<h1>Search</h1>
			<input
				type="text"
				placeholder="Search"
				value={Term}
				onChange={(e) => setTerm(e.target.value)}
			/>
		</div>
	);
};

export default Searchbar;
