// const Bob = Participant("Bob", {
// 	...Player,
// 	acceptWager: Fun([UInt], Null),
// });

import Player from "./Player";
import { VIEWS } from "../helpers/constants";

export default class Attacher extends Player {
	constructor(reach, setFunctions) {
		super(reach, setFunctions);
		this.utils = setFunctions;
		this.reach = reach;
		this.acceptWager = this.acceptWager.bind(this);
	}
	async acceptWager(wagerAtomic) {
		const wager = this.reach.formatCurrency(wagerAtomic, 4);
		this.utils.setWager(wager);
		this.utils.setView(VIEWS.ACCEPT_TERMS);
		return await new Promise((resolve) => {
			this.utils.setResolver({
				resolve: () => {
					this.utils.setView(VIEWS.ATTACHING);
					resolve();
				},
			});
		});
	}
}
