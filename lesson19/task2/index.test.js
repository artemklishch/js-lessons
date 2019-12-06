import { getOwnProps } from './index.js';

//first test
it ('should get array of props without methods', () => {
    const obj = {
        name: "Tom",
        age: 27,
        interest: "soccer",
        sayHi(){
            console.log(`Hi, Iam ${this.name}`);
        }
    };
    const result = getOwnProps(obj);
    expect(result).toEqual(["name", "age", "interest"]);
});


//second test
it ('should get length of props array without methods', () => {
    const obj = {
        name: "Tom",
        age: 27,
        interest: "soccer",
        sayHi(){
            console.log(`Hi, Iam ${this.name}`);
        }
    };
    const result = getOwnProps(obj).length;
    expect(result).toEqual(3);
});