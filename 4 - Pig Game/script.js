'use strict';
const score0 = 0;
const score1 = 0;

const newGame = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
let currentScore0 = document.getElementById('current--0');
let currentScore1 = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let activePlayer, scores, currentScoreTotal, currentScore, playing;

const resetNew = () => {
	playing = true;
	activePlayer = 0;
	scores = [0, 0];
	currentScoreTotal = [];
	currentScore = 0;
	playing = true;
	currentScore0.textContent = 0;
	currentScore1.textContent = 0;
	score0El.textContent = 0;
	score1El.textContent = 0;
	diceEl.classList.add('hidden');
	player0El.classList.remove('player--winner');
	player1El.classList.remove('player--winner');
	player0El.classList.add('player--active');
};
resetNew();
const switchPlayer = () => {
	document.getElementById(`current--${activePlayer}`).textContent = 0;
	currentScore = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	player0El.classList.toggle('player--active');
	player1El.classList.toggle('player--active');
};

const rollDice = () => {
	let dice = Math.floor(Math.random() * 6) + 1;
	if (playing) {
		if (diceEl.classList.contains('hidden')) {
			diceEl.classList.remove('hidden');
		}
		diceEl.src = `img/dice-${dice}.png`;
		if (dice != 1) {
			currentScore += dice;
			document.getElementById(
				`current--${activePlayer}`
			).textContent = currentScore;
			// currentScore0.textContent = currentScore;
		} else {
			switchPlayer();
			// change to player 2
			// document.getElementById(`current--${activePlayer}`).textContent = 0;
			// currentScore = 0;
			// activePlayer = activePlayer === 0 ? 1 : 0;
			// player0El.classList.toggle('player--active');
			// player1El.classList.toggle('player--active');
		}
		if (currentScore > 21) {
			console.log('Game over');
			currentScore = 0;
			switchPlayer();
		}
	}
};

const hold = () => {
	if (playing) {
		scores[activePlayer] += currentScore;
		document.getElementById(`score--${activePlayer}`).textContent =
			scores[activePlayer];
		// switchPlayer();

		if (scores[activePlayer] >= 100) {
			playing = false;
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.add('player--winner');
			console.log(activePlayer);
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.remove('player--active');
		} else {
			switchPlayer();
		}
	}
};

newGame.addEventListener('click', resetNew);
rollBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', hold);
