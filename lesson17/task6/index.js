export function bind(func){
    return function(){
        return func.call(this, ...arguments);
    }
}




// const sayHi = () => {
//     console.log("Hi");
// };

// const sum = (a,b) => {
//     console.log(a+b);
// };

// const user = {
//     name: "Tom",
//     sayHi(){
//         console.log(`Hi. I'm ${this.name}!`);
//     },
// };


// //console.log(sayHi());
// const defferedSayHi = bind(sayHi, 2000);
// const defferedSayHi1 = bind(sum, 2000);
// defferedSayHi();
// defferedSayHi1(10,10);

// const defferedSayHi2 = bind(user.sayHi, 2000);
// defferedSayHi2.call({name:"Bob"});