function suma1(a,b){
    return a+b;
}


const suma2 = function (a,b){
    return a+b; 
}
suma2()

const suma3=(a,b)=>{a+b;}

// jei logikos bloke yra tik viena procedura {return} nereikia
const suma4 = (a,b)=> a+b;

const kvadratu = a =>a**2;

const str = 'p';
//nested ternary nenaudoti
console.log(typeof str !== 'string' ? 'Error, input must be string type' : str.length===0 ? 'Error, no input' : str[0]);