import './App.css';
import { useState } from 'react'
import { VIEWS } from './helpers/constants'

import ConnectAccount from './Views/ConnectAccount';
import DeployerOrAttacher from './Views/DeployerOrAttacher';

import * as backend from './build/index.main.mjs'
import { loadStdlib } from '@reach-sh/stdlib'
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

const reach = loadStdlib('ALGO')
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet',
  MyAlgoConnect
}))
const { standardUnit } = reach
const defaults = {
  defaultFundAmount: '10',
  defaultWager: '3',
  standardUnit
}

function App() {
  const [ view, setView ] = useState(VIEWS.CONNECT_ACCOUNT)
  const [ account, setAccount ] = useState({})

  const reachFunctions = {
    connectAccount : async () => {
      const account = await reach.getDefaultAccount();
      setAccount(account);
      if (await reach.canFundFromFaucet()) {
        setView(VIEWS.FUND_ACCOUNT)
      } else {
        setView(VIEWS.DEPLOYER_OR_ATTACHER)
      }
    },

    selectDeployer: async () => {
      setView(VIEWS.DEPLOY)
    },

    selectAttacher: async () => {
      setView(VIEWS.ATTACH)
    },

    attach: (ctcInfoStr, attacher) => {
      const ctc = account.contract(backend, JSON.parse(ctcInfoStr));
      backend.Bob(ctc, attacher);
    },
    
    deploy: async (deployer, wager) => {
      const ctc = account.contract(backend);
      const deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector];
      deployer.setWagerAndDeadline(reach.parseCurrency(wager), deadline)
      backend.Alice(ctc, deployer)
      return JSON.stringify(await ctc.getInfo(), null, 2);
    }
  }
  
  return (
    <div className="App">
      {
        view === VIEWS.CONNECT_ACCOUNT && 
        <ConnectAccount connect={reachFunctions.connectAccount} />
      }

      {
        view === VIEWS.DEPLOYER_OR_ATTACHER ?
        <DeployerOrAttacher utils={reachFunctions}/>
        : null
      }
    </div>
  );
}

export default App;
