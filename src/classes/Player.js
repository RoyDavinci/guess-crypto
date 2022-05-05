// const Player = {
// 	// ...hasRandom,
// 	// guessHand: Fun([], UInt),
// 	// playHand: Fun([], UInt),
// 	// viewGuess: Fun([UInt], Null),
// 	// compareGuessOutcome: Fun([Bytes(1)], Null),
// 	// informTimeout: Fun([], Null),
// 	// showWinner: Fun([Bytes(1)], Null),
// 	// informNewRound: Fun([], Null),
// 	// informNewTrial: Fun([], Null),
// };

import { VIEWS } from "../helpers/constants";

export default class Player {
	constructor(reach, setFunctions) {
		this.reach = reach;
		this.setFunctions = setFunctions;
		this.round = 0;
		this.trial = 0;
	}

	random() {
		return this.reach.hasRandom.random();
	}
	async guessHand() {
		this.setFunctions.setView(VIEWS.GUESS_HAND);
		const hand = await new Promise((resolve) => {
			this.setFunctions.setResolver({
				resolve: (t) => resolve(t),
			});
		});
		this.setFunctions.setGuess((prev) => [...prev, hand]);
		return hand;
	}
	async playHand() {
		this.setFunctions.setView(VIEWS.PLAY_HAND);
		const hand = await new Promise((resolve) => {
			this.setFunctions.setResolver({
				resolve: (t) => resolve(t),
			});
		});
		console.log(hand);
		this.setFunctions.setHand(hand);
		return hand;
	}

	viewGuess(guessHex) {
		// const value = [...this.setFunctions.getOpponentGuesses()];
		// value.push(guess);
		const guess = parseInt(guessHex)
		this.setFunctions.setOpponentGuesses((prev) => [...prev, guess]);
	}
	compareGuessOutcome(outcome) {
		this.setFunctions.setOutcome((prev) => [...prev, outcome]);
	}
	informTimeout() {
		this.setFunctions.setView(VIEWS.TIMEOUT);
	}
	showWinner(outcome) {
		this.setFunctions.setWinner(outcome);
		this.setFunctions.setView(VIEWS.SHOW_WINNER);
	}
	informNewRound() {
		this.setFunctions.setView(VIEWS.AWAITING_TURN);
		this.round++;
		this.trial = -1;
		this.setFunctions.setRound(this.round);
		this.setFunctions.setTrial(this.trial);
		this.setFunctions.setHand(undefined);
		this.setFunctions.setGuess([]);
		this.setFunctions.setOpponentGuesses([]);
	}
	informNewTrial() {
		this.trial++;
		this.setFunctions.setTrial(this.trial);
	}
}
