function Product(itemname,price,discount,itemcode){
    this.itemname = itemname,
    this.price = price,
    this.discount= discount,
    this.itemcode= itemcode
    this.actual_price = function() {
        let real_price = price - ((price*discount)/100) ;
        return real_price;
    }    
}

var itemname = prompt("Enter the item name");
var price = prompt("Enter its price");
var discount = prompt("Enter the discount percent");
var itemcode = prompt("Enter the item code");

const create = new Product(itemname,price,discount,itemcode);
console.log(create);
console.log(create.actual_price());

// const product = {Cricket 
//     itemname: 'Flower',
//     price:50,
//     discount: 20,
//     itemcode: 'F40' 
// } 

//** Construct  **/
// function createProduct(itemname,price,discount,itemcode){
//     return{
//                 itemname: itemname,
//                 price: price,
//                 discount: discount,
//                 itemcode: itemcode,
//                 actual_price() {
//                             let real_price = price - ((price*discount)/100) ;
//                             return real_price; 
//             } 
            
//     }
// }
// const gardener = createProduct('Flower',550,5,'F40');
// console.log(gardener);
// console.log(gardener.actual_price());
