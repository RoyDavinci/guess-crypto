import React, { useState, useEffect } from "react";
import Deployer from "../classes/Deployer";
import { VIEWS } from "../helpers/constants";
import PlayHand from "./PlayHand";
import GuessHand from "./GuessHand";

const Deploy = ({ deploy, account, reach }) => {
	const [newTurn, setNewTurn] = useState(true)
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
		if(newTurn){
			if(opponentGuesses.includes(guess)){
				setOpponentPoint(opponentPoint + 10)
				setPoint(point - 10)
				setNewTurn(false)
			} 
			else if(opponentGuesses.length === 3){
				setOpponentPoint(opponentPoint - 10)
				setPoint(point + 10)
				setNewTurn(false)
			}
		}
	}, [newTurn, guess, opponentGuesses, point, opponentPoint])

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

			{/* {
				![VIEWS.DEPLOYING, VIEWS.DEPLOY, VIEWS.WAITING_FOR_ATTACHER, VIEWS.ATTACH_SUCCESS].includes(view) 
					&& 
				<>
					<h4>Your Points: {point}</h4>
					<h4>Opponent Points: {opponentPoint}</h4>
				</>
			} */}

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
					trial={trial}
				></GuessHand>
			)}

			{
				view === VIEWS.SHOW_WINNER && (
					<h2>{ winner === 'a' ? 'You Win' : winner === 'd' ? 'Nobody wins' : 'You lose'}</h2>
				)
			}
		</>
	);
};

export default Deploy;
