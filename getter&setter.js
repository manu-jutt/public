class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newwidth){
        if(newwidth > 0){
            this._width = newwidth;
        }
        else{
            console.error("Width must be greater than 0");
        }
    }

    set height(newheight){
        if(newheight > 0){
            this._height = newheight;
        }
        else{
            console.error("height must be greater than 0");
        }
    }

    get width(){
        return `${this._width}cm`;
    }

    get height(){
        return `${this._height}cm`;
    }

    get area(){
        return `${this._width * this._height}cm^2`;
    }
}

const rectangle = new Rectangle(23,45);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname(newfirstname){
        if (typeof newfirstname === "string" && newfirstname.length > 0) {
            this._firstname = newfirstname;
        }
        else{
            console.error(`This can't be your firstname`);
        }
    }

    set lastname(newlastname){
        if (typeof newlastname === "string" && newlastname.length > 0) {
            this._lastname = newlastname;
        }
        else{
            console.error(`This can't be your lastname`);
        }
    }

    set age(newage){
        if (newage > 0) {
            this._age = newage;
        }
        else{
            console.error(`This can't be your age`);
        }
    }

    get firstname(){
        return `Your first name is ${this._firstname}`;
    }

    get lastname(){
        return `Your lastname is ${this._lastname}`;
    }

    get age(){
        return `Your age is ${this._age}`;
    }
}

const person = new Person("Salman", "Hassan", 20);

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);