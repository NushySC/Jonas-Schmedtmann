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

const book = lufthansa.book;

const iberia = {
	airline: 'Iberia',
	iataCode: 'IB',
	bookings: [],
	book,
};

const aeroflot = {
	airline: 'Aeroflot',
	iataCode: 'SU',
	bookings: [],
	book,
};

const bookIB = book.bind(iberia);
const bookLH = book.bind(lufthansa);
const bookSU = book.bind(aeroflot);

bookIB(23, 'Steven Williams');
// Pass some arguments and then call with the rest
const bookIB23 = book.bind(iberia, 23);
bookIB23('Juan Cooper');
bookIB23('Marta Silas');
bookSU(1917, 'Liubov Popova');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
	console.log(this);
	this.planes++;
	console.log(this.planes);
};
// lufthansa.buyPlane();
document
	.querySelector('.buy')
	.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//   Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);
//   addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));
const addTaxRate = (rate) => {
	return (value) => {
		return value + value * rate;
	};
};

// Challenge
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
