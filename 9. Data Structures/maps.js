const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze');
rest.set(2, 'Lisbon');

rest.set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
	.set('open', 11)
	.set('close', 23);

console.log(rest);

console.log(rest.get('name'));

const question = new Map([
	['question', 'What is the best programming language in the world?'],
	[1, 'C'],
	[2, 'Java'],
	[3, 'JavaScript'],
	['correct', 3],
	[true, 'Correct 🎉'],
	[false, 'Try again!'],
]);
console.log(question);

for (const [key, value] of question) {
	if (typeof key === 'number') console.log(`Answer ${key}:${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));
