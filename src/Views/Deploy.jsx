import React, { useState } from "react";
import Deployer from "../classes/Deployer";
import { VIEWS } from "../helpers/constants";

const Deploy = ({ deploy, account, reach }) => {
	const [round, setRound] = useState(0);
	const [view, setView] = useState(VIEWS.DEPLOY);
	const [resolver, setResolver] = useState({});
	const [outcome, setOutcome] = useState(0);
	const [guess, setGuess] = useState(0);
	const [winner, setWinner] = useState("");
	const [wager, setWager] = useState("");
	const [value, setValue] = useState("");

	const setFunctions = {
		setRound: (x) => setRound(x),
		setView: (x) => setView(x),
		setResolver: (x) => setResolver(x),
		setOutcome: (x) => setOutcome(x),
		setGuess: (x) => setGuess(x),
		setWinner: (x) => setWinner(x),
	};
	const deployer = new Deployer(reach, setFunctions);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setView(VIEWS.DEPLOYING);
		const values = await deploy.deploy(deployer, wager);
		setValue(values);
		console.log(values);
	};

	return (
		<>
			{view === VIEWS.DEPLOY && (
				<>
					<h1>welcome</h1>
					<form method='' action='' onSubmit={handleSubmit}>
						<input
							value={wager}
							name=''
							onChange={(e) => setWager(e.target.value)}
						/>
						<button type='submit'>Set Wager</button>
					</form>
				</>
			)}
			{view === VIEWS.DEPLOYING && <h3>DEPLOYING....</h3>}
			{view === VIEWS.WAITING_FOR_ATTACHER && <h3>WAITING_FOR_ATTACHER....</h3>}
			{view === VIEWS.ATTACH_SUCCESS && <h3>ATTACH_SUCCESS....</h3>}
			{view === VIEWS.AWAITING_TURN && <h3>AWAITING_TURN....</h3>}
		</>
	);
};

export default Deploy;