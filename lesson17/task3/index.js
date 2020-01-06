export function defer(func, ms){
    return function(){
        setTimeout(() => func.call(this, ...arguments), ms);
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
// const defferedSayHi = defer(sayHi, 2000);
// const defferedSayHi1 = defer(sum, 2000);
// defferedSayHi();
// defferedSayHi1(10,10);

// const defferedSayHi2 = defer(user.sayHi, 2000);
// defferedSayHi2.call(user);
// defferedSayHi2.call({name:"Bob"});