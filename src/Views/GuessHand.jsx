import React, { useState, useEffect } from "react";
import { OUTCOME } from "../helpers/constants";

const GuessHand = ({ resolver, guesses, outcome, trial, hand }) => {
	const [value, setValue] = useState(0);
	// const [number, setNumber] = useState([]);
	// const [guessed, setGuessed] = useState([]);

	console.log(outcome, guesses);

	const handleSubmit = (e) => {
		e.preventDefault();
		resolver.resolve(value);
	};

	// useEffect(() => {
	// 	setNumber([...number, outcome]);
	// 	setGuessed([...guessed, guesses]);
	// }, [guesses, guessed, number, outcome]);

	return (
		<>
			{hand === undefined ? (
				<>
					<h3>Submit Your Guess. You have three trials to get it right</h3>
					<form onSubmit={handleSubmit}>
						<input
							type='number'
							min='0'
							max='100'
							name='hand'
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
						<button>Guess Hand</button>
					</form>
				</>
			) : (
				<>
					<h3>You played {hand}</h3>
					{outcome[trial] && <h4>Your guess was {outcome[trial]}</h4>}
				</>
			)}
			<table>
				<thead>
					<tr>
						<td>Your Guesses</td>
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
					<tr>
						{outcome.map((item, index) => {
							return <td key={index}>{OUTCOME[item]}</td>;
						})}
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default GuessHand;
