import React, { useState, useEffect } from "react";
import Deployer from "../classes/Deployer";
import { VIEWS } from "../helpers/constants";
import PlayHand from "./PlayHand";
import GuessHand from "./GuessHand";
import "../css/deploy.css";
import Deploying from "./Deploying";
import WaitingAttacher from "./WaitingAttacher";
import AwaitingTurn from "./AwaitingTurn";

const Deploy = ({ deploy, account, reach }) => {
	const [newTurn, setNewTurn] = useState(true);
	const [point, setPoint] = useState(50);
	const [opponentPoint, setOpponentPoint] = useState(50);
	const [round, setRound] = useState(-1); //set to -1
	const [view, setView] = useState(VIEWS.DEPLOY);
	const [resolver, setResolver] = useState({});
	const [outcome, setOutcome] = useState([]);
	const [guess, setGuess] = useState([]);
	const [winner, setWinner] = useState("");
	const [wager, setWager] = useState("");
	const [value, setValue] = useState("");
	const [trial, setTrial] = useState(-1); //set to -1
	const [hand, setHand] = useState(null);
	const [opponentGuesses, setOpponentGuesses] = useState([]);

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
	const deployer = new Deployer(reach, setFunctions);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setView(VIEWS.DEPLOYING);
		const values = await deploy.deploy(deployer, wager);
		setValue(values);
		console.log(values);
		setView(VIEWS.WAITING_FOR_ATTACHER);
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
		<div className='deployerContainer'>
			{view === VIEWS.DEPLOY && (
				<div className='deployerContainer__Item'>
					<h1>Welcome Deployer</h1>
					<form method='' action='' onSubmit={handleSubmit}>
						<input
							value={wager}
							name=''
							onChange={(e) => setWager(e.target.value)}
							required
							placeholder='Set the wager amount'
						/>
						<button type='submit'>Set Wager</button>
					</form>
				</div>
			)}
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
				></GuessHand>
			)}
			{view === VIEWS.DEPLOYING && <Deploying></Deploying>}
			{view === VIEWS.WAITING_FOR_ATTACHER && (
				<WaitingAttacher></WaitingAttacher>
			)}
			{view === VIEWS.ATTACH_SUCCESS && <h1>ATTACH_SUCCESS....</h1>}
			{view === VIEWS.AWAITING_TURN && <AwaitingTurn></AwaitingTurn>}
			{view === VIEWS.SHOW_WINNER && (
				<div>
					{winner === "a" ? (
						<div className='winner'>
							<h1>You Win</h1>
						</div>
					) : winner === "d" ? (
						<div className='draw'>
							<h1>Nobody wins</h1>
						</div>
					) : (
						<div className='lose'>
							<h1>You lose</h1>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Deploy;
