import React from 'react'

export default function DeployerOrAttacher({utils}){
    return (
      <div>
        <h2>Please select a role:</h2>
        <h4>
          <button
            onClick={() => utils.selectDeployer()}
          >Deployer</button>
          <br /> Set the wager, deploy the contract.
        </h4>
        <h4>
          <button
            onClick={() => utils.selectAttacher()}
          >Attacher</button>
          <br /> Attach to the Deployer's contract.
        </h4>
      </div>
    );
}