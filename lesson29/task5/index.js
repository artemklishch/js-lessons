export const delay = (delay, callback, context, ...args) => {
    setTimeout(() => callback.call(this, context, args), delay);
};

// const object = {
//     bame: 'Tom',
//     age: 27,
// };

// const someCallback = (obj, ...args) => {
//     console.log(obj);
// };
// delay(3000, someCallback, object, object.place = 'hjhj');

