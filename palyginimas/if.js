console.clear();

function skaicius(number){
    if(number%2===0 && number>=0){
        return `${number} yra lyginis skaicius`
    } else if(number%2 === 0&& number<0){
        return `${number} yra neigiamas lyginis skaicius`
    } else if(number%2 !=0 && number>0){
        return `${number} yra teigiamas nelyginis skaicius`
    } else if(number%2 !=0 && number<0){
        return `${number} yra neigiamas nelyginis skaicius`
    }
}

console.log(skaicius(0));



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