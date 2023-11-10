console.clear();

const tekstas1 = 'vasararr';
const tekstas2 = 'pavasaris';
const tekstas3 = 'pavasaris';
const tekstas4 = 'labas rytas';
const tekstas5 = 'pipiriukai';

//

function check(tekstas){
    let raideAts = 'a'
    let pasikartojimasAts = 0;


    const arr = tekstas.split('')
    let set1 = new Set(arr)
    let unique = Array.from(set1)

    for (let i = 0; i < unique.length; i++) {
        let pasikartojimas = 0;
        let raide = unique[i]

        for (let j = 0; j < tekstas.length; j++) {
            if(tekstas[j]===unique[i]){
                pasikartojimas++;
            }
            
        }
        
        if(pasikartojimas>pasikartojimasAts){
            pasikartojimasAts = pasikartojimas;
            raideAts = raide;
        }

    }
    console.log(raideAts, pasikartojimasAts);
    return 1;
}

check(tekstas1)



const abc = {};

for(const letter of tekstas1){
    if(abc[letter]){
        abc[letter]+=1;
    } else {
        abc[letter]=1;
    }
}


let maxCount = 0;

for (const letter in abc){
    if(abc[letter]>maxCount){
        maxCount = abc[letter]
    }
}
const letters = [];

for(const letter in abc){
    if(abc[letter]===maxCount){
        letters.push(letter)
    }
}

console.log(letters);