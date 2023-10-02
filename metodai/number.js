console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));


// console.clear();
console.log(Number.isInteger(5));
console.log(Number.isInteger(-5));
console.log(Number.isInteger(3.14));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
// !isInteger patikrinam ar skaicius baigiasi per kableli, isFinite ar tai baigtinis skaicius
console.log(!Number.isInteger(3.114) && Number.isFinite(3.114));

console.clear();
//parse int. Is string nr i number, '', tuscias string = NaN
console.log(Number.parseInt('6'));
console.log(Number.parseInt('abc666')); // NaN
console.log(Number.parseInt('666a6bc')); // Parsina iki pirmos klaidos 666
console.log(Number.parseInt('Infinity')); // NaN

console.log('------------------');
console.log(parseFloat(''));
console.log(parseFloat('789.000'));
console.log(parseFloat('789.001'));
console.log(parseFloat('Infinity')); // Infinity


console.clear();
// toFixed palieka tik nurodyta skaiciu kieki po kablelio
const kaina = 3.14;
console.log(kaina, '3.14');
console.log(kaina.toFixed(1));
console.log(kaina.toFixed(2));
console.log(kaina.toFixed(3));

const keistasSkaicius = 0.1+0.2;
const keistasSkaicius2 = keistasSkaicius.toFixed(1);
const keistasSkaicius3 = parseFloat(keistasSkaicius2)
console.log(keistasSkaicius3);

console.log('--------');
const c = 6.99999999;
// jei panaikina paskutini skaiciu, jis suapvalinamas ir pridedamas prie sekancio
console.log(c);
console.log(c.toFixed(5));

const d = 5.6789;
console.log(d.toFixed(3));