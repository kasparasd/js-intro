console.log('sup'.length);
console.log('   '.length);
console.log('\n\\'.length);

console.log('sup'.at(0));
console.log('sup'.at(1));
console.log('sup'.at(2));

console.log('sup'.at(0), 'sup'[0]);
console.log('sup'.at(-1), 'sup'[-1]);

console.clear();

console.log('abc'.charCodeAt(0));
console.log('abc'.charCodeAt(1));

const arr = ['abc', 'bbc', 'cca'];

const str1 = 'pop';
console.log(str1.concat(', ', arr));
console.log(str1);

console.clear();

const abc = ['a','b','c','d','e','f'];
const start = 'Abecele: ';

let a1 = start;

// for (let i = 0; i<abc.length; i++){
//     a1 += abc[i];
// }

const result = a1.concat(...abc)
console.log(result);

console.clear();

// includes ir indexOf

console.log('Labas rytas'.indexOf('a',2));


// Naudoti tik: for() {} ir if () {}
// ir su indexOf atskirai

function kiek(tekstas, raide){
    let result = 0;
    let count = 0;

    for(let i = 0; i<tekstas.length; i++){
        if(tekstas[i]===raide){
            result ++;
        }
        if(tekstas[i].indexOf(raide)===0){
            count ++;
        }
    }
    return [result, count];
}

console.log(kiek('labas', 'a'))

// repeat

console.log('a'.repeat(6));

//replace

const r1 = 'Labas';
const r2 = r1.replace('a', 'x');
console.log(r2);

console.clear();
const kopustas = 'kopustas';
console.log(kopustas.slice(0));

console.clear();

const pvz = '123 456 789   _,./_';
console.log(pvz.split(''));

console.clear();

console.log('Labas'.startsWith('x')); // false
console.log('Labas'.startsWith('l')); // false
console.log('Labas'.startsWith('L')); // true
console.log('Labas'.startsWith('Lab')); // true
console.log('Labas'.endsWith('as')); // true
