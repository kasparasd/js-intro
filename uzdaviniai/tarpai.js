/*
-pradzioje nebutu tarpu
-pabaigoje nebutu tarpu
-jei tarp zodziu yra is eiles einanciu daugiau nei vienas tarpas, likti tik vienas
*/

const str1 = 'ka   tu?   ka vakare?';
const trim = str1.trim(' ')
const arr = trim.split(' ')
let result = [];

for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== ' ' && arr[i] !==''){
        result.push(arr[i]);
    }
}
console.log(result.join(' '));



function tarpai(str){
    let result = str;
    for(; result.includes('  ');){
        result = result.replaceAll('  ', ' ')
    }
    return result;
}


console.log(tarpai('ka     tu?    ka     vakare?'));