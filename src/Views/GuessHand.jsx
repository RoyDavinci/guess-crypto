import React, { useState } from "react";
import { OUTCOME } from "../helpers/constants";
import "../css/guesshand.css";

const GuessHand = ({ resolver, guesses, outcome, trial, hand }) => {
	const [value, setValue] = useState(0);
	console.log(outcome, guesses);
	console.log(trial);

	const handleSubmit = (e) => {
		e.preventDefault();
		resolver.resolve(value);
	};
	return (
		<div className='guessHand__container'>
			<h1>Submit Your Guess. You have three trials to get it right</h1>
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
			{guesses.length > 0 ? (
				<>
					<h3>You guessed {guesses[trial - 1]}</h3>
				</>
			) : null}

			<table className='table text-white'>
				<thead>
					<tr>
						<th>Your Guesses</th>
						<th>Your Guess</th>
						<th>Your Outcome</th>
					</tr>
				</thead>
				<tbody>
					{guesses.map((guess, index) => {
						return (
							<tr key={index}>
								<th>Trial {index + 1}</th>
								<td>{guess}</td>
								<td>{OUTCOME[outcome[index]]}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default GuessHand;
