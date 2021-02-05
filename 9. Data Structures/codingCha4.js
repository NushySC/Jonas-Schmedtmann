const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

console.log(airline.slice(4));

const checkMiddleSeat = (seat) => {
	const s = seat.slice(-1);
	if (s === 'B' || s === 'E') {
		console.log('You did get the middle set');
	}
};
checkMiddleSeat('11B');

// Fix capitalization in name
const passenger = 'AnUska';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
	passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
// Comparing emails
const email = 'hello@anuska.io';
const loginEmail = '  Hello@anuska.Io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replace
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);
const announcement =
	'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
	console.log('Part of the NEW ARirbus family');
}

const checkBaggage = function (items) {
	const baggage = items.toLowerCase();
	if (baggage.includes('knife') || baggage.includes('gun')) {
		console.log('You are NOT allowed on board');
	} else {
		console.log('Welcome aboard!');
	}
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// Mask credit card
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));
const maskCreditCard = function (number) {
	const str = number + '';
	const last = str.slice(-4);
	return last.padStart(str.length, '*');
};
console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad weather... All Departues Delayed... ';
console.log(message2.repeat(5));
const planesInLine = function (n) {
	console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
