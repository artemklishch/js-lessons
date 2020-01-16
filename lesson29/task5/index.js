export const delay = (delay, callback, context, ...args) => {
    setTimeout(() => callback.apply(context, args), delay);
};

// const object = {
//     name: 'Tom',
//     age: 27,
// };
// function someCallback(obj){
//     console.log(obj);
// };
// delay(3000, someCallback, object);

