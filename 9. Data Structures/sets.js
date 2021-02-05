const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);

console.log(ordersSet);
console.log(new Set('Anuska'));
console.log(ordersSet.size);
console.log(ordersSet.has('Bread'));
ordersSet.add('Tiramisu');
ordersSet.delete('Pizza');
console.log(ordersSet.size);

for (const order of ordersSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];
// const staffUnique = new Set(staff);
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set('Anuska Sampedro').size);
