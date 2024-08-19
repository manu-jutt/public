class MathUtil1 {
    static PI = 3.14;

    static getcircum(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * (radius * radius);
    }
}

class MathUtil2{
    static PI = 3.14159;

    static getcircum(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * (radius * radius);
    }
}

console.log(MathUtil1.PI);
console.log(MathUtil2.PI);
console.log(MathUtil1.getcircum(4));
console.log(MathUtil1.getArea(5));
console.log(MathUtil2.getcircum(5));
console.log(MathUtil2.getArea(5));