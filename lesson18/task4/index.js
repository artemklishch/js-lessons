export function spy(func){
    return function spied(...args){
        spied.calls.push(args
            .reduce((acc,elem) => {
                return acc.concat(elem);
            },[]));
        return func.call(this, ...args);
    }
}
// function test(a, b) {
//     return (a + b);
// }

// const spyTest = spy(test);
// spyTest.calls = [];
// console.log(spyTest(4, 2));
// spyTest(9, 1);
// console.log(spyTest.calls);



// const user = {
//     name: 'John',
//     sayHi() {
//         return this.name;
//     }
// };

// const spyMethod = spy(user.sayHi);
// spyMethod.calls = [];
// console.log(spyMethod.apply({ name: 'Tom' })); // 'Tom'

// console.log(spyMethod.calls); // [ [] ]


