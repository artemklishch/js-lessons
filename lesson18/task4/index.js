export function spy(){
    return function func(){
        return func.calls.push([...arguments]
            .reduce((acc,elem) => {
                return acc.concat(elem);
            },[]));      
    }
}
// const myFunc = spy();
// myFunc.calls = [];
// myFunc(4,2);
// myFunc(9,1);
// console.log(myFunc.calls);

// const user = {
//     name: 'John',
//     sayHi() {
//         return this.name;
//     }
// };

// const spyMethod = spy(user.sayHi);
// spyMethod.calls = [];
// spyMethod.apply({ name: 'Tom' }); // 'Tom'

// console.log(spyMethod.calls) // [ [] ]

