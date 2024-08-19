class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);        
    }
}
class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`)
    }

    swim(){
        console.log(`This ${this.name} cant't be swiming`)
    }

    fly(){
        console.log(`This ${this.name} can't be flying`)
    }
}
class Fish extends Animal{
    name = "fish";

    swim(){
        console.log(`This ${this.name} is swiming`)
    }

    fly(){
        console.log(`This ${this.name} can't be flying`)
    }

    run(){
        console.log(`This ${this.name} can't run`)
    }
}
class Hawk extends Animal{
    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`)
    }

    swim(){
        console.log(`This ${this.name} can't swim`)
    }
    run(){
        console.log(`This ${this.name} cannot run`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
console.log(fish.alive);
console.log(hawk.alive);
rabbit.eat();
rabbit.sleep();
fish.eat();
fish.sleep();
hawk.eat();
hawk.sleep();
rabbit.run();
fish.swim();
hawk.fly();
rabbit.swim();
rabbit.fly();
fish.run();
fish.fly();
hawk.run();
hawk.swim();