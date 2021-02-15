const lufthansa = {
	airline: 'Lufthansa',
	iataCode: 'LH',
	bookings: [],
	book(flightNum, name) {
		console.log(
			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
		);
		this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
		console.log(this.bookings);
	},
};
lufthansa.book(239, 'Anuska Sampedro');
lufthansa.book(237, 'Lily Smith');

const book = lufthansa.book;

const iberia = {
	airline: 'Iberia',
	iataCode: 'IB',
	bookings: [],
	book,
};

book.call(iberia, 1523, 'Anuska Sampedro');
book.call(iberia, 2490, 'Anuska Sampedro');

iberia.book(1523, 'Anuska Sampedro');
iberia.book(7512, 'Lily Smith');

const aeroflot = {
	airline: 'Aeroflot',
	iataCode: 'SU',
	bookings: [],
	book,
};

const flightData = [5847, 'Natalya Lenina'];
book.apply(aeroflot, flightData);
book.call(iberia, ...flightData);
console.log(aeroflot);

// my Way
const reservation = (obj, flightNum, name) => {
	console.log(
		`${name} booked a seat on ${obj.airline} flight ${obj.iataCode}${flightNum}`
	);
	obj.bookings.push({flight: `${obj.iataCode}${flightNum}`, name});
};

reservation(lufthansa, 3456, 'anuska');
