console.clear();

const marks = [10,2,8,4,6];

const otherMarks = [
    marks[3],
    marks[4]
]
console.log(otherMarks);

const [...otherMs] = marks;

console.log(...otherMs);

const user = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
    children: [
        {
            name: "Maryte",
            age: 88,
        },
        {
            name: "Petras",
            age: 77,
        }
    ]
};

const {isMarried, children} = user;
console.log(children);

const zip = 12345;
const street = "Gedimino g.";
const houseNr = 7;

const address = {
    zip,
    gatve:street,
    houseNr:houseNr,
};

console.log(address);


