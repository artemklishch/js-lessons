export const delay = (delay, callback, context) => {
    return function(...args){
        setTimeout(() => callback.apply(context, args), delay);
    }
    
};

// const object = {
//     bame: 'Tom',
//     age: 27,
// };

// const someCallback = (obj) => {
//     console.log(obj);
// };
// const a = delay(3000, someCallback, object);
// a(object.place = 'hjhj');

