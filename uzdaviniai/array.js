console.clear();

console.log([10,2,8,4,6][1]);
console.log([10,2,8,4,6].at(1));

const a1 = [1,2];
const a2 = [3,4];

console.log(a1.concat(a2));

let myName = "baratas".split("");
let abc_whitelist = 'qwertyuiopasdfghjklzxcvbnm';
console.log(myName.every(el =>  abc_whitelist.includes(el) ) );
console.log(myName);
console.log(abc_whitelist);

console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false


console.clear();
flowers = ['kardelis', 'roze'];

flowers.shift();
console.log(flowers); // atima is priekio, pop is galo

flowers.unshift('Ruta'); // unshift prideda i prieki, push i gala
console.log(flowers);

console.log(flowers.reverse());
console.log(flowers);

console.clear();

const numbers = [1,2,3,4,5,6,7,8,9,10];

const numbers46 = numbers.slice(4,6);
console.log(numbers46);

console.clear();

console.log(numbers);

numbers.splice(3,0,55,66); // nei vieno elemento netrina, bet po 3 indekso iterpia skaiciu
console.log(numbers);

numbers.splice(3,2); // Nuo trecio elemento trinam 2 ir nieko naujo neiterpiam
console.log(numbers);
