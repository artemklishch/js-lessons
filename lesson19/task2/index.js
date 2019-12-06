export function getOwnProps(obj){
    // let arr = [];
    // for(let prop in obj){
    //     if(typeof prop !== 'function') arr.push(prop);
    // }
    // return arr;
    return Object.keys(obj);
}





// const obj = {
//     name: "Tom",
//     age: 27,
//     interest: "soccer",
//     sayHi(){
//         console.log(`Hi, Iam ${this.name}`);
//     }
// };
// console.log(getOwnProps(obj));
// console.log(typeof obj.sayHi);