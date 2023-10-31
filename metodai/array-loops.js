console.clear();

const marks = [10,2,8,4,6];

const doubleMarksFor = [];

for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];

    
}
function double(number){return number*2};

const doubleMarkMap = marks.map(double);

console.log(doubleMarkMap);



const doubleMarkMap2 = marks.map(number=>number*2);

console.log(doubleMarkMap2);

const badMarks = [100,11,10,2,-6,-14,true,8,4,NaN, 3.14, Math.PI, 'Blogas'];


function arSkaicius (number){
    const type = typeof number;
    return type !== 'number' || 
    number < 0 || 
    isNaN(number) || 
    number % 1 !==0
    ? false:true;
}
const goodMarksOnly = badMarks.filter(arSkaicius)

console.log(goodMarksOnly);

const goodMarksOnly2 = badMarks
    .filter(n => typeof n === 'number')
    .filter(n=>isFinite(n))
    .filter(n=>n>0)
    .filter(n=> n<11)
    .filter(n=>Number.isInteger(n));

console.log(goodMarksOnly2);

console.clear();

const stringList = ['a', 'A', 'b', 'B', 'ab', 'AB','labas', 'rytas'];

stringList.sort();
console.log(stringList);

const numberList = [10,2,8,4,6,20,22,28,24,26];

numberList.sort();
console.log(numberList);

for (let i = 0; i < numberList.length; i++) {
    for (let j = 0; j < numberList.length; j++) {
        
        
    }
    
}
const family = [
    {name: 'Maryte', age:88},
    {name: 'Jonas', age:99},
    {name: 'Petras', age:77},
    {name: 'Ona', age:66},
];

family.sort((a, b)=>a['age']-b['age']);
console.log(family);


let names = [];

for (let i = 0; i < family.length; i++) {
    names.push(family[i]['name']);
}

console.log(names);

const namesMap = family.map(user => user.name)
console.log(namesMap);

console.clear()

//////////////////////////////////

const pazymiai = [10,2,8,4,6]; 
console.log(pazymiai);

const pazymiuSuma = pazymiai.reduce((total, number)=>{
    return total += number
})

const vidurkis = pazymiuSuma / pazymiai.length;

console.log('vidurkis:', vidurkis);
console.clear();

const students = [
    {name: 'Maryte', marks:[88, 'asd', 10,2]},
    {name: 'Jonas', marks:[99, true]},
    {name: 'Petras', marks:[77,[], Infinity,7,7,7,7,7,7]},
    {name: 'Ona', marks:[66, null, undefined, {}, 2,4,6,8,10, NaN]},
];



const teacher = students.map(student=>({
    name:student.name,
    marks: student.marks.filter(n=>
        Number.isInteger(n) && n>0 && n<11)
    }))
.map(student=>(
    {
    name: student.name,
    average: student.marks.reduce((acc,curr) => acc += curr, 0) / student.marks.length || -1
}
)).sort((p1,p2)=>p1.average-p2.average)
    .map(student=>`${student.name} vidurkis: ${student.average === -1 ? 'Pazymiu neturi' : student.average};`)
    .join('\n')
    


console.log(teacher);

const teacher2 = students
.map(student =>({ 
    name: student.name,
    marks: student.marks
    .filter(n=>Number.isInteger(n) && n>0 && n<11)
}))
.map(student=>(
    {
        name:student.name,
        average: student.marks.reduce((acc,curr)=>acc + curr, 0)/student.marks.length || -1
    }
    ))
    .sort((s1,s2)=>s1.average - s2.average)
    .map(student => `${student.name}: ${student.average === -1 ? 'Neturi pazymiu' : student.average};`)
    .join('\n')
    
    
    
    console.log(teacher2);