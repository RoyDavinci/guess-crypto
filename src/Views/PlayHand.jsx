import React, { useState } from "react";

const PlayHand = ({ resolver, guesses, hand }) => {
	const [value, setValue] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		resolver.resolve(value);
	};

	return (
		<>
			<h3>Submit Your Guess</h3>
			<form onSubmit={handleSubmit}>
				<input
					type='number'
					min='0'
					max='100'
					name='hand'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button>Play Hand</button>
			</form>

			<table>
				<thead>
					<tr>
						<td>Opponents Guess</td>
					</tr>
					{guesses.map((trial, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
							</tr>
						);
					})}
				</thead>
				<tbody>
					<tr>
						{guesses.map((guess, index) => {
							return <td key={index}>{guess}</td>;
						})}
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default PlayHand;
