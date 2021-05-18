class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    sleep() {
        return `${this.name} is sleeping`;
    }
}

const koala = new Animal('Hebe');
console.log(koala.sleep());

class Duck extends Animal {
    bark() {
        `${this.name} is barking`;
    }
}

const duckling = new Duck('duckling');

class Cat extends Animal {
    constructor(name) {
        super(name);
        console.log(this.name);
    }

    sleep() {
        return 'Meow, ' + super.sleep();
    }
}
const mewtwo = new Animal('mewtwo');
mewtwo.sleep();
