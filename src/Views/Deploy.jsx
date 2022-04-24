import React, { useState } from "react";
import Deployer from "../classes/Deployer";
import { VIEWS } from "../helpers/constants";
import PlayHand from "./PlayHand";
import GuessHand from "./GuessHand"

const Deploy = ({ deploy, account, reach }) => {
	const [round, setRound] = useState(-1); //set to -1
	const [view, setView] = useState(VIEWS.DEPLOY);
	const [resolver, setResolver] = useState({});
	const [outcome, setOutcome] = useState([]);
	const [guess, setGuess] = useState([]);
	const [winner, setWinner] = useState("");
	const [wager, setWager] = useState("");
	const [value, setValue] = useState("");
	const [trial, setTrial] = useState(-1);  //set to -1
	const [hand, setHand] = useState(null);
	const [opponentGuesses, setOpponentGuesses] = useState([]);

	const setFunctions = {
		setRound: (x) => setRound(x),
		setView: (x) => setView(x),
		setResolver: (x) => setResolver(x),
		setOutcome: (x) => setOutcome(x),
		setGuess: (x) => {
			const copy = [...guess];
			copy.push(x)
			setGuess(copy)
		},
		setWinner: (x) => setWinner(x),
		setWager: (x) => setWager(x),
		setHand: (x) => setHand(x),
		setOpponentGuesses: (x) => {
			const copy = [...opponentGuesses];
			copy.push(x)
			setOpponentGuesses(copy)
		},
		setTrial: (x) => setTrial(x)
	};
	const deployer = new Deployer(reach, setFunctions);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setView(VIEWS.DEPLOYING);
		const values = await deploy.deploy(deployer, wager);
		setValue(values);
		console.log(values);
		setView(VIEWS.WAITING_FOR_ATTACHER)
	};
	console.log(view);

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
			{view === VIEWS.PLAY_HAND && (
				<PlayHand
					resolver={resolver}
					guesses={opponentGuesses}
					hand={hand}
				></PlayHand>
			)}
			{view === VIEWS.GUESS_HAND && (
				<GuessHand 
					resolver={resolver} 
					guesses={guess} 
					outcome={outcome}
				></GuessHand>
			)}
		</>
	);
};

export default Deploy;
