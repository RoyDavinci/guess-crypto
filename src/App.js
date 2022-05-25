import "./App.css";
import { useState } from "react";
import Deploy from "./Views/Deploy";
import { VIEWS } from "./helpers/constants";
import AttacherComponent from "./Views/Attacher";

import ConnectAccount from "./Views/ConnectAccount";
import DeployerOrAttacher from "./Views/DeployerOrAttacher";

import * as backend from "./build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import Deploying from "./Views/Deploying";
import AwaitingTurn from "./Views/AwaitingTurn";
import WaitingAttacher from "./Views/WaitingAttacher";

const reach = loadStdlib("ALGO");
reach.setWalletFallback(
	reach.walletFallback({
		providerEnv: "TestNet",
		MyAlgoConnect,
	})
);
const { standardUnit } = reach;
const defaults = {
	defaultFundAmount: "10",
	defaultWager: "3",
	standardUnit,
};

function App() {
	const [view, setView] = useState(VIEWS.CONNECT_ACCOUNT);
	const [account, setAccount] = useState({});

	const reachFunctions = {
		connectAccount: async () => {
			const account = await reach.getDefaultAccount();
			setAccount(account);
			if (await reach.canFundFromFaucet()) {
				setView(VIEWS.FUND_ACCOUNT);
			} else {
				setView(VIEWS.DEPLOYER_OR_ATTACHER);
			}
		},

		selectDeployer: async () => {
			setView(VIEWS.DEPLOY);
		},

		selectAttacher: async () => {
			setView(VIEWS.ATTACH);
		},

		attach: (attacher, ctcInfoStr) => {
			const ctc = account.contract(backend, JSON.parse(ctcInfoStr));
			backend.Bob(ctc, attacher);
		},

		deploy: async (deployer, wager) => {
			const ctc = account.contract(backend);
			const deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector];
			deployer.setWagerAndDeadline(reach.parseCurrency(wager), deadline);
			backend.Alice(ctc, deployer);
			return JSON.stringify(await ctc.getInfo(), null, 2);
		},
	};

	console.log(view);

	return (
		<div className='App'>
			{view === VIEWS.CONNECT_ACCOUNT && (
				<ConnectAccount connect={reachFunctions.connectAccount} />
			)}

			{view === VIEWS.DEPLOYER_OR_ATTACHER ? (
				<DeployerOrAttacher utils={reachFunctions} />
			) : null}
			{view === VIEWS.DEPLOY && (
				<Deploy
					deploy={reachFunctions}
					account={account}
					reach={reach}
				></Deploy>
			)}
			{view === VIEWS.ATTACH && (
				<AttacherComponent
					attach={reachFunctions}
					account={account}
					reach={reach}
				></AttacherComponent>
			)}
		</div>
	);
}

export default App;
