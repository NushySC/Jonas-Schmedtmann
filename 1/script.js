'use strict';
let js = 'amazing';
if (js === 'amazing') {
	console.log('js is fun');
}

let JohnTeam = [916, 94, 123];
let MikeTeam = [809, 120, 103];

let averageJohn = (JohnTeam[0] + JohnTeam[1] + JohnTeam[2]) / 3;

let averageMike = (MikeTeam[0] + MikeTeam[1] + MikeTeam[2]) / 3;

console.log(averageMike, averageJohn);

let winner = () => {
	if (averageJohn > averageMike) {
		console.log('John is the winner with an average of ' + averageJohn);
	} else if (averageJohn < averageMike) {
		console.log('Mike is the winner');
	} else {
		console.log("It's tie");
	}
};

winner();

// Body Mass Index
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBmi = markMass / (markHeight * markHeight);
const johnBmi = johnMass / (johnHeight * johnHeight);

const isMarkFatter = markBmi > johnBmi;

console.log(markBmi);
console.log(johnBmi);
console.log(isMarkFatter);

// Template Strings

const firstName = 'Anuska';
const lastName = 'Sampedro';

const fullName = `I'm ${firstName} ${lastName}`;
console.log(fullName);

const oldFull = "I'm " + firstName;
console.log(oldFull);

// if else

if (markBmi > johnBmi) {
	console.log(`Mark is fatter because his BMI is ${markBmi}`);
} else if (johnBmi > markBmi) {
	console.log(`John is fatter because his BMI is ${johnBmi}`);
} else {
	console.log('They are both equaly fat');
}

// Winner Team

const averageDolphin = (96 + 18 + 89) / 3;
const averageKoalas = (88 + 160 + 110) / 3;

if (averageDolphin > averageKoalas && averageDolphin >= 100) {
	console.log(`Dolphins won!`);
} else if (averageKoalas > averageDolphin && averageKoalas >= 100) {
	console.log(`Koalas won`);
} else if (
	averageKoalas === averageDolphin &&
	averageKoalas >= 100 &&
	averageDolphin >= 100
) {
	console.log(`It's a tie`);
} else {
	console.log('No one won');
}

console.log(averageDolphin);
console.log(averageKoalas);

// Tip Calculator

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const tipPercent = bill >= 50 && bill <= 300 ? 0.15 : 0.2;

// const tip = bill * tipPercent;
const total = bill + tip;

console.log(
	`The bill was ${bill}, the tip was ${tip} and the total was ${total}`
);

// Temperature Amplitude

const temps = [13, -2, -6, -1, 'error', 9, 13, 15, 14, 9, 5];
const calcTempAmpliture = () => {
	let max = temps[0];
	let min = temps[0];
	for (let i = 0; i < temps.length; i++) {
		if (typeof temps[i] !== 'number') continue;
		if (temps[i] > max) {
			max = temps[i];
		} else if (temps[i] < min) {
			min = temps[i];
		}
		const ampli = max - min;
		console.log(ampli);
	}
};

calcTempAmpliture(temps);

// Given an array of forecasted maximun temperature, the thermometer displys a strig with these temperatures.

const temperatures = [17, 21, 23];
const days = [1, 2, 3];

const printForecast = () => {};

// Years after retirement
const calcAge = function (birthYear) {
	return 2020 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
	const age = calcAge(birthYear);
	const retirement = 65 - age;
	console.log(`${firstName} retires in ${retirement} years`);
};
yearsUntilRetirement(1980, 'Anuska');

// Coding Challenge Calculate Average

const dolphins = [916, 904, 123];
const koalas = [809, 120, 103];

const dolphinsAve = (dolphins[0] + dolphins[1] + dolphins[2]) / 3;
const koalasAve = (koalas[0] + koalas[1] + koalas[2]) / 3;

const dolphinsAver = (dolphins) => {
	console.log((dolphins[0] + dolphins[1] + dolphins[2]) / 3);
};
dolphinsAver(dolphins);

const koalasAver = (koalas) => {
	console.log((koalas[0] + koalas[1] + koalas[2]) / 3);
};
koalasAver(koalas);

const checkWinner = (dolphinsAve, koalasAve) => {
	if (dolphinsAve > koalasAve * 2) {
		console.log('Dolphins Win');
	} else if (koalasAve > dolphinsAve * 2) {
		console.log('Koalas Win');
	} else {
		console.log('Nobody wins');
	}
};

console.log(dolphinsAve);
console.log(koalasAve);

checkWinner(dolphinsAve, koalasAve);

const calcAge = function (birthyear) {
	return 2020 - birthyear;
};

const years = [1954, 1980, 1983];

const age1 = calcAge(years[0]);

const calcTip = (bill) => {
	if (bill >= 50 && bill <= 300) {
		return bill * 0.15;
	} else {
		return bill * 0.2;
	}
};

calcTip(400);

const bills = [200, 40, 400, 2];
const tips = [
	calcTip(bills[0]),
	calcTip(bills[1]),
	calcTip(bills[2]),
	calcTip(bills[3]),
];

// BRACKETS AND DOT NOTATION FOR OBJECTS

const anuska = {
	firstName: 'Anuska',
	lastName: 'Sampedro',
	age: 2020 - 1990,
	job: 'programmer',
	friends: ['Nobody', 'likes', 'me'],
};

console.log(anuska);

console.log(anuska.lastName);
// Here we can put any expession that wwe like, we can compute it from somewhere else
console.log(anuska['lastName']);

const nameRepeatedPart = 'Name';

console.log(anuska['first' + nameRepeatedPart]);

//Concatenation
console.log(anuska['last' + nameRepeatedPart]);

// How would this be with a template literal

const interestedIn = prompt(
	'What would you like to know about Anuska? Choose between firstName, lastName, job, friends'
);

console.log(interestedIn);

console.log(`This person is interested in your ${interestedIn}`);

console.log(`Your ${interestedIn} is ${anuska[interestedIn]}`);

if (interestedIn === 'job') {
	console.log(`Your job is ${anuska[interestedIn]}`);
} else if (interestedIn === 'age') {
	console.log(`You are ${anuska[interestedIn]}`);
} else if (interestedIn === 'lastName') {
	console.log(`Your last name is ${anuska[interestedIn]}`);
} else if (interestedIn === 'firstName') {
	console.log(`Your first name is ${anuska[interestedIn]}`);
} else if (interestedIn === 'friends') {
	console.log(
		`You have ${anuska.friends.length}. Their names are: ${anuska.friends[0]}, ${anuska.friends[1]} and ${anuska.friends[2]} `
	);
} else {
	console.log('You are not a failure');
}

// LESSON 44

const anuska = {
	firstName: 'Anuska',
	lastName: 'Sampedro',
	// age: 2020 - 1990,
	birthyear: 1990,
	job: 'programmer',
	friends: ['Nobody', 'likes', 'me'],
	hasDriversLicense: true,

	// It's a property of the Anuska Object. This is a fuction expression, because it's hosited. Any fuction attached to an object it's a method.
	// calcAge: function (birthyear) {
	// 	return 2020 - birthyear;
	// },

	//Equal to the object calling the method.
	// calcAge: function () {
	// 	return 2020 - this.birthyear;
	// },

	// We can also return a new property and store it in the object
	calcAge: function () {
		this.age = 2020 - this.birthyear;
		return this.age;
	},

	//Challenge: get a summary of the person object
	// getSummary: function () {
	// 	const driversLicense = () =>
	// 		this.hasDriversLicense ? 'has' : 'does not have';
	// 	return `${anuska.firstName} ${anuska.lastName} is a ${
	// 		anuska.age
	// 	} year old ${anuska.job} and she ${driversLicense()} a license`;
	// },

	//Jonas' way:  use the this keyword in case you ever change the name of an object, the methods wont get affected. The ternary operator can be just called from within the method.
	getSummary: function () {
		this.hasDriversLicense ? 'has' : 'does not have';
		return `${this.firstName} ${this.lastName} is a ${this.age} year old ${
			this.job
		} and she ${
			this.hasDriversLicense ? 'has' : 'does not have'
		} a license`;
	},
};

console.log(anuska.calcAge());

// We call the function once and thedn we are able to access the property many times
console.log(anuska.age);

console.log(anuska.getSummary());

//Since we are passing the property directly from the object and not passing it to the fucntion, we no linger need the parameter.
// console.log(anuska.calcAge(1990));
// console.log(anuska['calcAge'](1990));

//Lesson 43 - COding Challenge

const markMiller = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	},
};

const johnSmith = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

//The method doesn't call itself. It needs to be caled, then the property will be available.

console.log(markMiller.calcBMI());
console.log(johnSmith.calcBMI());

const whosFatter = () => {
	if (johnSmith.calcBMI() > markMiller.calcBMI()) {
		console.log(
			`John is fatter, because his BMI is ${johnSmith.bmi} and Mark's is ${markMiller.bmi}`
		);
	} else if (johnSmith.calcBMI() < markMiller.calcBMI()) {
		console.log(
			`Mark is fatter, because his BMI is ${markMiller.bmi} and John's is ${johnSmith.bmi}`
		);
	} else {
		console.log('They are both the same');
	}
};

whosFatter();

// for loop keeps running while condition is TRUE

for (let rep = 1; rep <= 10; rep++) {
	console.log(`Lifting weights, repetition number ${rep}`);
}

// 99 bottles of beer on the wall, 99 bottles of beer.

for (let bottle = 99; bottle >= 1; bottle--) {
	console.log(
		`${bottle} bottles of beer on the wall, ${bottle} bottles of beer. `
	);
}

//47 Looping Arrarys

const anuska = [
	'Anuska',
	'Sampedro',
	1990,
	'programmer',
	['Nobody', 'likes', 'me'],
	'awesome',
];

const types = [];
for (let i = 0; i < anuska.length; i++) {
	console.log(anuska[i], typeof anuska[i]);
	// types[i] = typeof anuska[i];
	types.push(typeof anuska[i]);
}

console.log(types);

const years = [1954, 1980, 2004, 1990];

const ages = [];
for (let i = 0; i < years.length; i++) {
	console.log(2020 - years[i]);
	ages.push(years[i]);
}

console.log(ages);

//Tip calculator

const bills = [200, 40, 400, 2];
const tips = [];

for (let i = 0; i < bills.length; i++) {
	if (bills[i] >= 50 && bills[i] <= 300) {
		tips.push(bills[i] * 0.15);
	} else {
		tips.push(bills[i] * 0.2);
	}
}
console.log(tips);

//48 Looping Arrarys Backwards

const anuska = [
	'Anuska',
	'Sampedro',
	1990,
	'programmer',
	['Nobody', 'likes', 'me'],
	'awesome',
];

const anuskaArray = [];
for (let i = anuska.length - 1; i >= 0; i--) {
	anuskaArray.push(typeof anuska[i]);
}

console.log(anuskaArray);

// 49 For and while loop

for (let rep = 1; rep <= 10; rep++) {
	console.log(`Lifting weights; repetion ${rep}`);
}

let rep = 1;
while (rep <= 10) {
	console.log(`Lifting weights; repetion ${rep}`);
	rep++;
	// If you forget the counter, the loop will kepp going forever.
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice != 6) {
	console.log(`You rolled a ${dice}`);
	// This will be an infinite loop as well and we don't want that.
	dice = Math.trunc(Math.random() * 6) + 1;
	// We start with some random Number, we check of ts fiferent from SVGMatrix, then we enter the loop, then in the next line we create a new random Number, check if it's different than six, and printo t the console.
	if (dice === 6) {
		console.log('The loop is ending');
	}
}

// 50 Improving tip calculator with loops

const bills = [12, 24, 32, 460, 56, 67, 720, 87, 910];
const tips = [];
const total = [];
const calcTip = () => {
	for (let i = 0; i < +bills.length; i++) {
		if (bills[i] >= 50 && bills[i] <= 300) {
			tips.push(bills[i] * 0.15);
			total.push(bills[i] + tips[i]);
		} else {
			tips.push(bills[i] * 0.2);
			total.push(bills[i] + tips[i]);
		}
	}
};

calcTip();
console.log(bills, tips, total);

// Jonas solution
const calcTips = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
for (let i = 0; i < bills.length; i++) {
	const tip = calcTips(bills[i]);
	tips.push(tip);
	total.push((tip = bills[i]));
}

// Bonus => Write a function calcAverage whoch takes an arrary called 'arr' as an argument.

let sum = 0;

const calcAverage = (arr) => {
	for (let i = 0; i < +arr.length; i++) {
		sum = arr[i] + sum;
	}
	console.log(sum / arr.length);
};

calcAverage(tips);
calcAverage(bills);

// 62. Coding challenge --- Given an array of forecasted max tempseratues the theroteter displays a string with these temperatures.

const maxtemps = [17, 21, 23];
const forecasts = [];

const printForecast = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		console.log(`${arr[i]} degrees in ${i + 1} day...`);
		forecasts.push(arr[i]);
	}
};

printForecast(maxtemps);

// Jonas solution
console.log(
	`...${data1[0]}degrees... ${data1[1]}degrees... ${data1[2]}degrees...}`
);
const printForecast = (arr) => {
	let str = '';
	for (let i = 0; i < arr.length; i++) {
		str = str + `${arr[i]} degrees`;
	}
	console.log(str);
};
printForecast(data1);
