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
		this,utils.setView(VIEWS.GUESS_HAND)
		const hand = await new Promise((resolve) => {
			this.utils.setResolver = {
				resolve: (t) => resolve(t),
			};
		});
		this.utils.setGuess(initialGuess => initialGuess.push(hand))
		return hand;
	}
	async playHand() {
		this.utils.setView(VIEWS.PLAY_HAND);
		const playHand = await new Promise((resolve) => {
			this.utils.setResolver = {
				resolve: (t) => resolve(t),
			};
		});
		this.utils.setHand(playHand);
		return playHand;
	}

	viewGuess(guess) {
		const value = [...this.utils.getOpponentGuesses()];
		value.push(guess);
		this.utils.setOpponentGuesses(prev => prev.push(guess));
	}
	compareGuessOutcome(outcome) {
		this.utils.setOutcome(prev => prev.push(outcome));
	}
	informTimeout() {
		this.utils.setView(VIEWS.TIMEOUT);
	}
	showWinner(outcome) {
		this.utils.setWinner(outcome);
		this.utils.setView(VIEWS.SHOW_WINNER);
	}
	informNewRound() {
		this.utils.setView(VIEWS.AWAITING_TURN);
		this.round++;
		this.trial = 0;
		this.utils.setRound(this.round);
		this.utils.setTrial(this.trial);
		this.utils.setHand(null)
	}
	informNewTrial() {
		this.utils.setView(VIEWS.AWAITING_RESULT);
		this.trial++;
		this.utils.setTrial(this.trial);
	}
}
