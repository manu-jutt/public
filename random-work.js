function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`You Drive a ${this.color} ${this.model} of ${this.make} from the year ${this.year}`)}
}

const car1 = new Car("Toyota", "Corolla", 2016, "black");
const car2 = new Car("Audi", "R8", 2022, "Red");
const car3 = new Car("Ford", "Charger", 2002, "grey");

car1.drive();
car2.drive();
car3.drive();
