class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayproduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: Rs.${this.price}`)
    }
}

const Product1 = new Products("Shirts", 700);
const Product2 = new Products("Pants", 500);
const Product3 = new Products("Trousers", 300);
const Product4 = new Products("Watches", 1000);


Product1.displayproduct();
Product2.displayproduct();
Product3.displayproduct();
Product4.displayproduct();