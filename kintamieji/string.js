/*
Iniciavimas kabutemis: "",''

*/

const txt1 = 'text 1'
const txt2 = "text 2"

console.log(txt1);
console.log(txt2);

//vienguba kabute (')
// \n = new line
// \r = return

console.log('vienguba kabute (\\\')');

const formatuotasTekstas = 'Labas\n\r\
rytas,\n\r\
Lietuva';
console.log(formatuotasTekstas);

const backtick = `Labas
rytas
Lietuva`;

console.log(backtick);

// Teksto apimtis

const vardas = 'Chuck';
console.log(vardas.length);

const sveikinimas = 'Labas';
const parosMetas = 'Rytas';
const valstybe = 'Lietuva';

const msg = ` ${sveikinimas} ${parosMetas}, ${valstybe} `;

console.log(msg);

console.clear();

const n1 = 5 +7;
console.log(n1);

const n2 = 5+ '7';
console.log(n2);

const n3 = '5'+7;
console.log(n3);

const n4 = '5' + '7';
console.log(n4);

const n5 = 7 - 5;
console.log(n5);

const n6 = 7 - '5';
console.log(n6);

const n7 = '7' - '5';
console.log(n7);

