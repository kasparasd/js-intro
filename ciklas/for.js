console.clear();

let a = 2;

for(let i = 0; i<a; ++i){
    // console.log(i);
}

// skaiciai intervale nuo 3 iki 13 imtinai yra: 

for(let i = 0; i<13; i++){
    // console.log(`skaiciai intervale nuo 3 iki 8 yra:`)
}

const start = 3;
const finish = 8;
let numberSequence = '';




if(finish - start<0){
    for(let i = start; i >= finish; i--){
        if(i === start){
            numberSequence +=', ' + 1;
        } else
        numberSequence +=', ' + i;
    }
} else {
    for(let i = start; i <= finish; i++){
        if(i === start){
            numberSequence +=i;
        } else
        numberSequence +=', ' + i;
    }
}

const numberLine = `skaiciai intervale nuo ${start} iki ${finish} yra: ${numberSequence}.`;

console.log(numberLine);


for (let i = 0; i<=finish; i+=2){

    console.log(i);
}



const word = 'zodis';

for(let i = 0; i <word.length; i++){
    console.log(word[i]);
}
