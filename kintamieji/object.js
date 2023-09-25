console.clear();

//vartotojas: vardas, amzius, ar vedes

const jonas = {
    name :'Jonas', 
    age :99, 
    isMarried:true
};

const maryte = {
    get name(){
        return 'Maryte';
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
