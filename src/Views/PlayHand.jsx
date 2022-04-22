import React, { useState } from "react";

const PlayHand = ({ resolver, guesses, hand }) => {
	const [value, setValue] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		resolver.resolve(value);
	};

	return (
		<>
			{
				hand === null ? 
				<>
					<h3>Submit A Number</h3>
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
				</> :
				<>
					<h3>You played {hand}</h3>
					<table>
						<thead>
							<tr>
								<td>Opponents Guess</td>
							</tr>
							{guesses.map((guess, index) => {
								return (
									<tr key={index}>
										<td>Trial {index + 1}</td>
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
			}
			

			
		</>
	);
};

export default PlayHand;
