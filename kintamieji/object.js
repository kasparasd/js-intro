console.clear();

//vartotojas: vardas, amzius, ar vedes

const jonas = {
    name :'Jonas', 
    age :99, 
    isMarried:true
};

const maryte = {
    get name(){
        return 'Maryte ';
    },
    age: 88, 
    isMarried:false
};

console.log(maryte.name, maryte['name']);

const jonasName = jonas.name;
const jonasAge = jonas.age;
const jonasMarried = jonas.isMarried;

const maryteName = maryte.name;
const maryteAge = maryte.age;
const maryteMarried = maryte.isMarried;

let a = 1;
let b = a;
console.log(a,b);

a=2;
console.log(a,b);

b=3;
console.log(a,b);

const c = [1,2];
const d = c;

console.log(c,d);

c[0] = 111;
console.log(c,d);

c[1] = 222;
console.log(c,d);

d[0] = 333;
console.log(c,d);

d[1] = 444;
console.log(c,d);

const sheeps = [1,2,3];
const clonedSheeps = [...sheeps];

console.log(sheeps, clonedSheeps);

clonedSheeps[0]=9;
console.log(sheeps, clonedSheeps);

sheeps.push(8);
console.log(sheeps, clonedSheeps);

clonedSheeps.push(7);
console.log(sheeps, clonedSheeps);