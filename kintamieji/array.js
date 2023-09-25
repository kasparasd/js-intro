/*
Array

*/
console.clear();

const tuscias = [];
console.log(tuscias);

const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai);

console.log(pazymiai, pazymiai.length);

console.log(pazymiai[pazymiai.length-1]);

// Suskaiciuoti pazimiu vidurki ir isvesti kaip sakini:
// "Studento pazimiu vidurkis yra 7."


console.log(`Studento pazymiu vidurkis yra: ${pazymiai.reduce((a,b)=>a+b)/pazymiai.length}`)


const aplankytosVietos = ['Vilnius', 'Kaunas', 'Klaipeda'];

let aplankytos;

console.log(`Mano aplankytos vietos vienoje eiluteje: ${aplankytosVietos.join(', ')}`);

console.clear();
const colors = ['geltona', 'zalia', 'raudona'];

console.log(colors)
console.log(colors[1])

colors[1]=777;
console.log(colors);

colors[1]='žalia';
console.log(colors);






