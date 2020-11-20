'use strict';
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// const btnCheck = document.querySelector('.check');
// let scoreText = document.querySelector('.score').textContent;
// let highscoreText = document.querySelector('.highscore').textContent;
// let message = document.querySelector('.message').textContent;

const displayMessage = (message) => {
	document.querySelector('.message').textContent = message;
};
const setTextContent = (element, message) => {
	document.querySelector(element).textContent = message;
};

const checkGuess = () => {
	const guess = Number(document.querySelector('.guess').value);
	if (!guess) {
		// document.querySelector('.message').textContent =
		// 	'What the fuck are you guessing';
		displayMessage('What the fuck are you guessing');
	} else if (number === guess) {
		// score = score + 1;
		score++;
		// document.querySelector('.score').textContent = score;
		setTextContent('.score', score);
		// document.querySelector('.message').textContent = 'Your guess was right';
		displayMessage('Your guess was right. Awesome!');
		document.querySelector('body').style.backgroundColor = '#48d41d';
		// document.querySelector('.number').textContent = guess;
		setTextContent('.number', guess);
		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}
	} else if (guess !== number) {
		if (score >= 1) {
			// document.querySelector('.message').textContent =
			// 	guess < number
			// 		? "Your guess it's too low"
			// 		: "Your guess it's too high";
			displayMessage(
				guess < number
					? "Your guess it's too low"
					: "Your guess it's too high"
			);
		}
	}

	// else if (score >= 0) {
	// 	if (number > guess) {
	// 		document.querySelector('.message').textContent =
	// 			"Your guess it's too low";
	// 		score = score - 1;
	// 		document.querySelector('.score').textContent = score;
	// 	} else if (number < guess) {
	// 		document.querySelector('.message').textContent =
	// 			"Your guess it's too high";
	// 		score = score - 1;
	// 		document.querySelector('.score').textContent = score;
	// 	}
	// }
	else {
		// document.querySelector('.message').textContent = 'You lost';
		displayMessage('Loser!');
		score = score - 1;
		// document.querySelector('.score').textContent = score;
		setTextContent('.score', score);
	}
};

const resetGame = () => {
	score = 20;
	// document.querySelector('.score').textContent = score;
	setTextContent('.score', score);
	// document.querySelector('.message').textContent = 'Start guessing';
	displayMessage('Start guessing!');
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').textContent = '?';
	// TO DO document.querySelector('.guess').textContent = '';
};
document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', resetGame);
