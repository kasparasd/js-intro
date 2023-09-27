
function duokPenkis(){
    return 5;
}

console.log(duokPenkis());

const userName1 = 'Jonas';
const userAge1 = 99;

const user1Jubiliejus = (userAge1 - userAge1%10)/10
const user1Str = `${userName1} turejo ${user1Jubiliejus} jubilieju/-s`;
console.log(user1Str);

console.clear();

function jubiliejus(vardas, age){
    return `${vardas} turejo ${(age - age%10)/10} jubilieju/-s`
}

console.log(jubiliejus('Jonas', 99));

console.clear();

function studentAverage(name, marks){
    let i = 0;
    const marksAvg = (marks[i++]+marks[i++]+marks[i++]+marks[i++]+marks[i++])/marks.length
    return `${name}: pazymiu vidurkis yra ${marksAvg}.`
}

console.log(studentAverage('Jonas', [10,2,8,4,6]));
console.log(studentAverage('Jonas', [9,9,9,9,9]));