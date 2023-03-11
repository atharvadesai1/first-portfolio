class Animal{
    constructor(name,totalLegs,sound,type)
    {
        this.name = name;
        this.totalLegs = totalLegs;
        this.sound = sound;
        this.type = type;       
    }
}

const dog = new Animal('dog',4,'bhaubhau','German Shephard');
console.log(dog);
console.log(dog.type);

const cat = new Animal('cat',4,'meow','Persian');
console.log()

const Animal1 = class Animal{
    constructor(name,totalLegs,sound,type)
    {
        this.name = name;
        this.totalLegs = totalLegs;
        this.sound = sound;
        this.type = type;       
    }
}
const giraffe = new Animal1('giraffe',4,'keeeiii','Long');
console.log(Animal1.name);




//Class Extend
class Product{
    constructor(itemName){
        console.log('Passed by Furniture '+ itemName);
        this.itemName = itemName;
    }

    getItemName(){
        return this.itemName + " is a product";
    }
}

class Furniture extends Product{
    constructor(itemName){
        super(itemName);
    }

    getItemName(){
        return this.itemName + ' is a Furniture';
    }
}

let chair = new Furniture('Chair');
console.log(chair);



//getter and setter
class Product3{
    constructor(itemName,price,mfd_date,brand,discount){
        this.itemName = itemName;
        this.price = price;
        this.mfd_date = mfd_date;
        this.brand = brand;
        this.discount = discount;
    }

    get discountedPrice()
    {
        return (this.price - ((this.discount*this.price)/100));
    }
    
    set priceAmount(value)
    {
        return this.price = value ;   
    }

    set discountPercent(value)
    {
        return this.discount = value ;   
    }
};

let mobile = new Product3('mobile',20000,'2/10/22','Vivo',15);
console.log(mobile);
console.log(mobile.discountedPrice);
// console.log(mobile.priceAmount);
console.log(mobile);







