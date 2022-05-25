import React from "react";
import "../css/deployerOrAttacher.css";

export default function DeployerOrAttacher({ utils }) {
	return (
		<div className='deployerOr__Attacher'>
			<div className='deployerOR__AttacherItem'>
				<p>
					Welcome To <strong>Guess The Number</strong> Reach Project
				</p>
				<p>
					Roles are attached To Users, you can either be a Deployer(setting the
					wage), or an attacher(accepting the set wage).
				</p>
				<h1>Please select a role:</h1>
				<div className='deployer'>
					<h4>Set the wager, deploy the contract.</h4>
					<button onClick={() => utils.selectDeployer()}>Deployer</button>
				</div>

				<div className='attacher'>
					<h4>Attach to the Deployer's contract.</h4>
					<button onClick={() => utils.selectAttacher()}>Attacher</button>
				</div>
			</div>
		</div>
	);
}
