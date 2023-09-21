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

let sum = 0;
const pazimiuSkaicius = pazymiai.length;

pazymiai.forEach(pazimys => {
    sum+=pazimys;
});

console.log(`Studento pazymiu vidurkis yra: ${sum/pazimiuSkaicius}`);

const aplankytosVietos = ['Vilnius', 'Kaunas', 'Klaipeda'];

let aplankytos;

console.log(`Mano aplankytos vietos vienoje eiluteje: ${aplankytosVietos.join(', ')}`);