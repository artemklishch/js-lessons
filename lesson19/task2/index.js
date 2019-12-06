export function getOwnProps(obj){
    return Object.entries(obj)
        .filter(elem => typeof elem[1] !== 'function')
        .map(elem => elem[0]);
}

const obj = {
    name: "Tom",
    age: 27,
    interest: "soccer",
    sayHi(){
        console.log(`Hi, Iam ${this.name}`);
    }
};
console.log(getOwnProps(obj));
console.log(typeof obj.sayHi);