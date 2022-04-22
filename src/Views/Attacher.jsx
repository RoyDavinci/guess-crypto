import React, { useState } from "react";
import Attacher from "../classes/Attacher";
import { VIEWS } from "../helpers/constants";
import AcceptContract from "./AcceptContract";
import PlayHand from "./PlayHand";
import GuessHand from "./GuessHand";

const AttacherComponent = ({ attach, reach, account }) => {
	const [round, setRound] = useState(0);
	const [view, setView] = useState(VIEWS.ATTACH);
	const [resolver, setResolver] = useState({});
	const [outcome, setOutcome] = useState([]);
	const [guess, setGuess] = useState([]); 
	const [winner, setWinner] = useState("");
	const [wager, setWager] = useState("");
	const [value, setValue] = useState("");
	const [show, setShow] = useState(false);
	const [trial, setTrial] = useState(0);
	const [hand, setHand] = useState(null);
	const [opponentGuesses, setOpponentGuesses] = useState([]);

	const setFunctions = {
		setRound: (x) => setRound(x),
		setView: (x) => setView(x),
		setResolver: (x) => setResolver(x),
		setOutcome: (x) => setOutcome(x),
		setGuess: (x) => setGuess(x),
		setWinner: (x) => setWinner(x),
		setWager: (x) => setWager(x),
		setHand: (x) => setHand(x),
		setOpponentGuesses: (x) => setOpponentGuesses(x),
	};
	const attacher = new Attacher(reach, setFunctions);

	const handleSubmit = (e) => {
		e.preventDefault();
		attach.attach(attacher, value);
	};

	// console.log(reach);

	return (
		<>
			{view === VIEWS.ATTACH && (
				<>
					<h1>welcome</h1>
					<form method='' action='' onSubmit={handleSubmit}>
						<textarea
							col='30'
							row='30'
							value={value}
							onChange={(e) => setValue(e.target.value)}
						></textarea>
						<button type='submit'>Attach The Contract</button>
					</form>
				</>
			)}
			{view === VIEWS.ACCEPT_TERMS && (
				<AcceptContract wager={wager} resolver={resolver}></AcceptContract>
			)}

			{view === VIEWS.ATTACHING && <h3>ATTACHING....</h3>}
			{view === VIEWS.AWAITING_TURN && <h3>AWAITING_TURN....</h3>}
			{view === VIEWS.PLAY_HAND && (
				<PlayHand
					resolver={resolver}
					guesses={opponentGuesses}
					hand={hand}
				></PlayHand>
			)}

			{
				view === VIEWS.GUESS_HAND && (
					<GuessHand 
						resolver={resolver} 
						guesses={guess} 
						outcome={outcome}
						trial={trial}
						hand={hand}
					></GuessHand>
				)
			}
		</>
	);
};

export default AttacherComponent;
