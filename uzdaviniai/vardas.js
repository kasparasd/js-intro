console.clear();

function vardas(vardas){
    const simboliai = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

    if(vardas[0] === vardas[0].toUpperCase() && vardas.slice(1) === vardas.slice(1).toLowerCase()){
        for(let i = 0; i<vardas.length; i++ ){
           if(!simboliai.includes(vardas[i])){
            return `Klaida: simbolis ${vardas[i]} neleistinas`
           }
        }
        return true;
    } else return 'Klaida: patikrinkite ar vardas prasideda is didziosios raides ir ar varde nera daugiau didziuju raidziu';
}

console.log(vardas('Jonas'));

// function suma(...skaiciai){
//     console.log(skaiciai);
// }

// suma(1,2,3)

function isName(name){
    console.log(name === undefined);
    return 'ok';
}

console.log(isName())

console.log(isFinite(''));