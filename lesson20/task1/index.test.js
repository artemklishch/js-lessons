import { User } from './index.js';

it ('should check work of object', () => {
    const result = new User("Tom", 27);
    expect(result).toEqual({name:"Tom", age:27});
});

it ('should check method sayHi() of object', () => {
    const user1 = new User("Tom", 27);
    const result = user1.sayHi();
    expect(result).toEqual(console.log("Hi, I am Tom"));
});

it ('should check method requestNewPhoto() of object', () => {
    const user1 = new User("Tom", 27);
    const result = user1.requestNewPhoto();
    expect(result).toEqual(console.log("New photo request was sent for Tom"));
});

it ('should check method setAge(value) of object', () => {
    const user1 = new User("Tom", 27);
    const result = user1.setAge(-23);
    expect(result).toEqual(false);
});