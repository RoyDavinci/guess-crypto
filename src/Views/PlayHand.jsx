import React, { useState } from "react";

const PlayHand = ({ resolver, guesses, hand }) => {
	const [value, setValue] = useState(0);
	console.log(guesses);

	const handleSubmit = (e) => {
		e.preventDefault();
		resolver.resolve(value);
	};
	console.log(hand)

	return (
		<>
			{ ((hand === null)||(hand === undefined)) ? (
				<>
					<h3>Submit A Number</h3>
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
					<table>
						<thead>
							<tr>
								<td>Opponents Guess</td>
							</tr>
							<tr>
							{guesses.map((guess, index) => {
								return (
										<td>Trial {index + 1}</td>
								);
							})}
								</tr>
						</thead>
						<tbody>
							<tr>
								{guesses.map((guess, index) => {
									console.log(guess);
									return <td key={index}>{guess}</td>;
								})}
							</tr>
						</tbody>
					</table>
				</>
			)}
		</>
	);
};

export default PlayHand;
