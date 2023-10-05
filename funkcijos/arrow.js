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

const str = 'pop'
console.log(typeof str !== 'string' || str.length===0 ? false : str[0]);