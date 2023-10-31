console.clear();

const marks = [10,2,8,4,6];

let sumFor = 0;

for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    sumFor +=mark;
    
}

console.log(`FOR: sum =`, sumFor);

// for-of
let sumForOf = 0;

for (const mark of marks) {
    sumForOf +=mark;
}

console.log(`FOR-OF: sum =`, sumForOf);

//while

let sumWhile = 0;
let i = 0;

while (i<marks.length) {
    sumWhile +=marks[i];
    i++;
}

console.log(`While: sum =`, sumWhile);

//Do while

let sumDoWhile = 0;
let iDoWhile = 0;

do {
    sumDoWhile+=marks[iDoWhile]
    iDoWhile++
} while (iDoWhile < marks.length);

console.log(`Do While: sum =`, sumDoWhile);