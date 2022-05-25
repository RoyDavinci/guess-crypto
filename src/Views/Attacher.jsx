import React, { useState, useEffect } from "react";
import Attacher from "../classes/Attacher";
import { VIEWS } from "../helpers/constants";
import AcceptContract from "./AcceptContract";
import PlayHand from "./PlayHand";
import GuessHand from "./GuessHand";
import "../css/attach.css";

const AttacherComponent = ({ attach, reach, account }) => {
	const [newTurn, setNewTurn] = useState(true);
	const [point, setPoint] = useState(50);
	const [opponentPoint, setOpponentPoint] = useState(50);
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
	console.log(opponentGuesses);

	const setFunctions = {
		setRound: (x) => setRound(x),
		setNewTurn: (x) => setNewTurn(x),
		setView: (x) => setView(x),
		setResolver: (x) => setResolver(x),
		setOutcome: (x) => setOutcome(x),
		setGuess: (x) => setGuess(x),
		setWinner: (x) => setWinner(x),
		setWager: (x) => setWager(x),
		setHand: (x) => setHand(x),
		setOpponentGuesses: (x) => setOpponentGuesses(x),
		setTrial: (x) => setTrial(x),
	};
	const attacher = new Attacher(reach, setFunctions);

	const handleSubmit = (e) => {
		console.log("attach");
		e.preventDefault();
		attach.attach(attacher, value);
	};

	useEffect(() => {
		if (newTurn) {
			if (opponentGuesses.includes(guess)) {
				setOpponentPoint(opponentPoint + 10);
				setPoint(point - 10);
				setNewTurn(false);
			} else if (opponentGuesses.length === 3) {
				setOpponentPoint(opponentPoint - 10);
				setPoint(point + 10);
				setNewTurn(false);
			}
		}
	}, [newTurn, guess, opponentGuesses, point, opponentPoint]);

	return (
		<div className='attachContainer'>
			{view === VIEWS.ATTACH && (
				<div className='attachContainer__Item'>
					<h1>Welcome Attacher</h1>
					<form method='' action='' onSubmit={handleSubmit}>
						<textarea
							col='30'
							row='30'
							value={value}
							onChange={(e) => setValue(e.target.value)}
						></textarea>
						<button type='submit'>Attach The Contract</button>
					</form>
				</div>
			)}
			{view === VIEWS.ACCEPT_TERMS && (
				<AcceptContract wager={wager} resolver={resolver}></AcceptContract>
			)}

			{view === VIEWS.ATTACHING && <h1>ATTACHING....</h1>}
			{view === VIEWS.AWAITING_TURN && <h1>AWAITING_TURN....</h1>}
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
					trial={trial}
					hand={hand}
				></GuessHand>
			)}

			{view === VIEWS.SHOW_WINNER && (
				<h2>
					{winner === "b"
						? "You Win"
						: winner === "d"
						? "Nobody wins"
						: "You lose"}
				</h2>
			)}
		</div>
	);
};

export default AttacherComponent;
