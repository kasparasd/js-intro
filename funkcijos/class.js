console.clear();

class Dog {
    constructor(vardas, spalva) {
        this.name = vardas;
        this.color = spalva;
        this.age = 0;
    }

    setAge(newAge) {
        this.age = newAge
    }
    hello() {
        return `Au au, as esu ${this.name}`
    }
}

const rex = new Dog('Rex', 'black');
const brisius = new Dog('Brisius', 'white');

console.log(rex);
console.log(brisius.setAge(10), brisius);
console.log(brisius.hello());