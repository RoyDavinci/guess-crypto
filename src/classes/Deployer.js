// const Alice = Participant("Alice", {
// 	...Player,
// 	wager: UInt,
// 	deadline: UInt,
// 	informAcceptedWager: Fun([], Null),
// 	informWaitingForAttacher: Fun([], Null),
// });
import Player from "./Player";
import { VIEWS } from "../helpers/constants";

export default class Deployer extends Player {
	constructor(reach, setFunctions) {
		super(reach, setFunctions);
		this.utils = setFunctions;
	}

	setWagerAndDeadline(wager, deadline) {
		this.wager = wager;
		this.deadline = deadline;
	}

	informAcceptedWager() {
		this.utils.setView(VIEWS.AWAITING_TURN);
	}
	informWaitingForAttacher() {
		this.utils.setView(VIEWS.WAITING_FOR_ATTACHER);
	}
}
