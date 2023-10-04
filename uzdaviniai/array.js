console.clear();

console.log([10,2,8,4,6][1]);
console.log([10,2,8,4,6].at(1));

const a1 = [1,2];
const a2 = [3,4];

console.log(a1.concat(a2));

let myName = "baratas".split("");
let abc_whitelist = 'qwertyuiopasdfghjklzxcvbnm';
console.log(myName.every(el =>  abc_whitelist.includes(el) ) );
console.log(myName);
console.log(abc_whitelist);

console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false





