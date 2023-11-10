console.clear();



// class Pet {
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//         this.sound = 'Keistas garsas'
//     }

//     setColor(newColor) {
//         this.color = newColor;
//     }

//     sayHi(){
//         return `${this.name}: ${this.sound} as esu ${this.color} spalvos!`;
//     }
// }

// class Dog extends Pet {
//     constructor(name,color){
//         super(name,color);
//         this.sound = 'Au au';
//     }
// }

// const rex = new Dog('Rex', 'juodos');
// console.log(rex.sayHi())

// class Cat extends Pet {
//     constructor(name, color){
//         super(name, color);
//         this.sound = "Miau miau";
//     }
// }

// const tom = new Cat('Tom', 'juodos');
// console.log(tom.sayHi());


// class Hamster extends Pet {
//     constructor(name, color){
//         super(name, color);
//         this.sound = "Cham cham";
//     }
// }

// const lokis = new Hamster('Lokis', 'juodos');
// console.log(lokis.sayHi());

class Animal {
    constructor(name, canFly, canSwim, canTalk){
        this.name = name;
        this.canFly = canFly;
        this.canSwim = canSwim;
        this.canTalk = canTalk;
        this.legsCount = 'koju skaicius';
        this.sound = 'garsas';
    }
    voice(){
        return console.log(this.sound);
    }
}

class Pet extends Animal {
    constructor(name, furColor, canFly, canSwim, canTalk){
        super(name, canFly, canSwim, canTalk);
        this.furColor = furColor;
        this.legsCount = 4;
    }
    introduce(){
        return console.log(`${this.sound}, mano vardas ${this.name}, esu ${this.furColor} spalvos, turiu ${this.legsCount} letenas`)
    }
}

class Dog extends Pet {
    constructor(name,furColor, canFly, canSwim, canTalk){
        super(name, furColor, canFly, canSwim, canTalk)
        this.sound = 'Au au';
       
    }
    sit(){
        return console.log(`${this.sound}, ${this.name} atsisedo`);
    }
    stand(){
        return console.log(`${this.sound}, ${this.name} jau senas, bet dar atsistojo, daugiau nekankink`);
    }
}

class Cat extends Pet {
    constructor(name,furColor, canFly, canSwim, canTalk){
        super(name, furColor, canFly, canSwim, canTalk)
        this.sound = 'Miau miau';
    }
}

const a = new Dog('Virgis','baltos', 'neskrenda', 'plaukia', 'kalba')
a.introduce()
a.sit()
a.stand()

const b = new Cat('Storulis', 'baltos', 'neskrenda', 'truputi pluduriuoja', 'kalba');

b.introduce()