export class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    static createEmpty(){
            return {
                name: "",
                age: null,
            }
    }
    sayHi(){
        console.log(`Hi, I am ${this.name}`);
    }
    requestNewPhoto(){
        console.log(`New photo request was sent for ${this.name}`);
    }
    setAge(value){
        if(value < 0) return false;
        this.age = value;
        if (this.age >= 25) this.requestNewPhoto();
        return value;
    }
}


// const user1 = new User();
// console.log(user1); 
// user1.sayHi();
// user1.requestNewPhoto();
// console.log(user1.setAge(-20));
// console.log(user1.setAge(26));
//console.log(user1.constructor.createEmpty());

