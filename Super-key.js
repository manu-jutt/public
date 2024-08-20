class Animal {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`This ${this.name} moves at the speed of ${speed}km/h`)
    }
}

class Rabbit extends Animal {
    
    constructor(name, age, runspeed) {
        super(name, age);
        this.runspeed = runspeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
    }
}

class Fish extends Animal {

    constructor(name, age, swimspeed) {
        super(name, age);
        this.swimspeed = swimspeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimspeed);
    }
}

class Hawk extends Animal {

    constructor(name, age, flyspeed) {
        super(name, age);
        this.flyspeed = flyspeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
    }
}

const rabbit = new Rabbit("rabbit", 1.5, 38);
const fish = new Fish("fish", 2, 46);
const hawk = new Hawk("hawk", 3, 74);

console.log(`First animal is ${rabbit.name}`);
console.log(`It's age is: ${rabbit.age}`);
console.log(`It can run at the speed of ${rabbit.runspeed}km/h`);
rabbit.run();
rabbit.move(35);

console.log(`Second animal is ${fish.name}`);
console.log(`It's age is: ${fish.age}`);
console.log(`It can run at the speed of ${fish.swimspeed}km/h`);
fish.swim();

console.log(`Last animal is ${hawk.name}`);
console.log(`It's age is: ${hawk.age}`);
console.log(`It can fly at the speed of ${hawk.flyspeed}km/h`);
hawk.fly();
hawk.move(75);