export const delay = (delay, callback, context, ...args) => {
    setTimeout(function(){
        callback(context, args)
    }, delay);
};

// const object = {
//     name: 'Tom',
//     age: 27,
// };

// const someCallback = (obj) => {
//     console.log(obj);
// };
// delay(3000, someCallback, object);

