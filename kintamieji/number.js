/*
 - teigiami / neigiami
 - sveikieji / desimtainiai
 - normalus / nenormalus

 Iniciavimo budas:
 -const (default)
 -let (jei kinta informacija)
 -var (niekada)
*/

const amzius = 99;
let pinigine = 0;
var minusas = -7.56;

console.log(amzius);
console.log(pinigine);
console.log(minusas);


// Runint koda i terminal node ./kintamieji/number.js

const begalybe = Infinity;
const minusBegalybe = -Infinity;

console.log(begalybe, minusBegalybe);

const n = NaN;
console.log(n, NaN);

const liekana = 7 % 5;
console.log(liekana);

console.clear()

let wallet = 0;
wallet+=5
console.log('wallet:', wallet);

wallet+=5;
wallet+=5;
wallet+=5;
console.log('wallet:', wallet);
wallet-=2;
console.log('wallet:', wallet);
wallet-=2;
wallet-=2;
wallet-=2;
console.log('wallet:', wallet);

wallet *=4; 
console.log('wallet:', wallet);
wallet +=2; 
console.log('wallet:', wallet);
wallet *=4; 
console.log('wallet:', wallet);
wallet /=5; 
console.log('wallet:', wallet);
wallet **=2; 
wallet **=2; 
console.log('wallet:', wallet);
wallet /=10000; 
console.log('wallet:', wallet);
wallet %=5; 
console.log('wallet:', wallet);


const skaicius = 256;
const daliklis = 10;
const liekana3 = skaicius % daliklis;

console.log(liekana3);
const sveikaDalis = (skaicius - liekana3)/daliklis;
console.log(sveikaDalis);

console.clear();

let index = 0;
console.log('index', index);

index +=1;
index +=1;
console.log('index', index);
index++;
console.log('index', index);
++index;
console.log('index', index);

let i = 0;
console.log(i);
console.log(i++); // padidina po panaudojimo
console.log(++i); // padidina pries panaudojima

console.log('---------');
let i2 =0;
console.log(i2);
console.log(++i2); // Pirmiau padidina po to panaudoja
console.log('---------');



let a = 5;
let x=7;

b = (x++) +a
console.log(b)
console.log(x);