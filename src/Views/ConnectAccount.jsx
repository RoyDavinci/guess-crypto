import React, { useEffect } from "react";
import "../css/connectaccount.css";
// import Image from "../images/istat_for_mac_dish_anim.gif";

export default function ConnectAccount({ connect }) {
	useEffect(() => {
		connect();
	}, [connect]);

	return (
		<div className='connectAccount__Container'>
			<div className='connectAccount__Item'>
				<h1>Connecting to MyAlgo Wallet...</h1>
				<h3>Please Check Popup</h3>
			</div>
		</div>
	);
}
