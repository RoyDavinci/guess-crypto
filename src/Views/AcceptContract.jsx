import React, { useState } from "react";
import { VIEWS } from "../helpers/constants";

const AcceptContract = ({ resolver, wager }) => {
	const [view, setView] = useState(VIEWS.ATTACH);

	const handleSubmit = (e) => {
		e.preventDefault();
		resolver.resolve();
		setView(VIEWS.ATTACHING);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<button type='submit'>accept Wager</button>
				<p>{wager}</p>
			</form>
		</>
	);
};

export default AcceptContract;
