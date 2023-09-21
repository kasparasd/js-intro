console.clear();

// true / false
// Operacijos
// && and
// || or

// Nenaudoti true false aritmetiniuose veiksmuose
console.log(true + true + false); //clog 2

console.log(true  && true);
console.log(true  || true);
console.log(true  || false);
console.log(true  && false);

const f = true && (false||true);
console.log(f);