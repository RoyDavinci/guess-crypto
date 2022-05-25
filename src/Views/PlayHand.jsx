import React, { useState } from "react";
import "../css/playhand.css";

const PlayHand = ({ resolver, guesses, hand }) => {
	const [value, setValue] = useState(0);
	console.log(guesses);

	const handleSubmit = (e) => {
		e.preventDefault();
		resolver.resolve(value);
	};
	console.log(hand);

	return (
		<div className='playHand__Container'>
			{hand === null || hand === undefined ? (
				<>
					<h1>Submit A Number</h1>
					<input
						type='number'
						min='0'
						max='100'
						name='hand'
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<button onClick={handleSubmit}>Play Hand</button>
				</>
			) : (
				<>
					<h3>You played {hand}</h3>
					<table className='table text-white table-bordered'>
						<thead>
							<tr>
								<th>Opponents Tries</th>
								<th>Opponents Guess</th>
							</tr>
						</thead>
						<tbody>
							{guesses.map((guess, index) => {
								console.log(guess);
								return (
									<tr key={index}>
										<th>Trial {index + 1}</th>
										<td key={index}>{guess}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</>
			)}
		</div>
	);
};

export default PlayHand;
