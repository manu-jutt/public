class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Salman Hassan", 20, "26 main St.", "Hassan Abdal", "Pakistan");
const person2 = new Person("Ahmad Hassan", 21, "4th St.", "Sargodha", "Pakistan");
const person3 = new Person("Jawad Ahmad", 20, "12 main St.", "Hassan Abdal", "Pakistan");

console.log(person1.name);
console.log(person1.age);
for(const property in person1.address){
    console.log(person1.address[property]);
}

console.log(person2.name);
console.log(person2.age);
for(const property in person2.address){
    console.log(person2.address[property]);
}

console.log(person3.name);
console.log(person3.age);
for(const property in person3.address){
    console.log(person3.address[property]);
}