console.clear();
const abc = {
    raide:'a'
}

const b = 'raide'

if(abc.b === 'a') {
    console.log(555); // no log
}

if(abc[b] === 'a') {
    console.log(666); // log
}


// if uzduotis
// 0 irgi yra lyginis skaicius!
// 4 yra lyginis skaicius.
// -4 yra neigiamas lyginis skaicius.
// 3 nera lyginis skaicius.
// -3 nera neigiamas lyginis skaicius.
// 3.14 nera lyginis skaicius, nes desimtainiai skaiciai niekada nebuna lyginiai.
// -3.14 nera lyginis skaicius, nes desimtainiai skaiciai niekada nebuna lyginiai.

const number = -3.14;

if(number === 0){
    return console.log(`${number} irgi yra lyginis skaicius`)
} else if (number % 2 === 0 && number > 0){
    return console.log(`${number} yra lyginis skaicius`)
} else if (number % 2 === 0 && number < 0){
    return console.log(`${number} yra neigiamas lyginis skaicius`)
} else if (number % 1 === 0 && number > 0){
    return console.log(`${number} nera lyginis skaicius`)
} else if (number % 1 === 0 && number < 0){
    return console.log(`${number} yra neigiamas nelyginis skaicius`)
} else if (number % 1 !== 0 && number > 0) {
    return console.log(`${number} nera lyginis skaicius, nes desimtainiai skaiciai niekada nebuna lyginiai.`);
} else if (number % 1 !== 0 && number < 0) {
    return console.log(`${number} nera lyginis skaicius, nes desimtainiai skaiciai niekada nebuna lyginiai.`);
}


