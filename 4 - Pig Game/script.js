'use strict';
const score0 = 0;
const score1 = 0;

const newGame = document.querySelector('.btn-new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
let currentScore0 = document.getElementById('current--0');
let currentScore1 = document.getElementById('current--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const rollDice = () => {
	let currentScore = Math.floor(Math.random() * 6) + 1;
	currentScore1.textContent = currentScore;
	console.log(currentScore);
};

rollBtn.addEventListener('click', rollDice);
