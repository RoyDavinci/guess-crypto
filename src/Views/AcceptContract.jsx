import React, { useState } from "react";
import { VIEWS } from "../helpers/constants";
import "../css/accept.css";

const AcceptContract = ({ resolver, wager }) => {
	const [view, setView] = useState(VIEWS.ATTACH);

	const handleSubmit = (e) => {
		e.preventDefault();
		resolver.resolve();
		setView(VIEWS.ATTACHING);
	};

	return (
		<div className='acceptContract__container'>
			<form onSubmit={handleSubmit}>
				<h1>Deployer Set Wager As</h1>
				<i className='fa-solid fa-chevrons-down'></i>
				<h1> {wager}</h1>
				<button type='submit'>Accept Wager</button>
			</form>
		</div>
	);
};

export default AcceptContract;
