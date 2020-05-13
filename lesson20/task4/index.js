export class Order{
    isConfirmed = false;
    constructor(price, city, type){
        this.price = price;
        this.city = city;
        this.type = type;
        this.id = Math.random().toString();
        this.dateCreated = new Date();
    }
    checkPrice(){
        return this.price > 1000 ? true : false;
    }
    confirmOrder(){
        this.isConfirmed = true;
        this.dateConfirmed = new Date();
    }
    isValidType(){
        if(this.type === "Buy" || this.type === "Sell"){
            return true;
        }else return false;
    }
}

// const order1 = new Order(1500, "Kharkiv", "Buy");
// console.log(Object.keys(order1));
// console.log(order1.checkPrice());
// console.log(order1.confirmOrder());
// console.log(order1.isValidType());