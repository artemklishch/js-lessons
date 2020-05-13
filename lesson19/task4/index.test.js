import { User } from './index.js';

it ('should create object of user', () => {
    const result = new User("John", 21);
    expect(result).toEqual({name: "John", age: 21});
});

it ('should check method setAge() < 0', () => {
    const user1 = new User("John", 21);
    const result = user1.setAge(-26);
    expect(result).toEqual(false);
});

it ('should check method setAge() >= 0', () => {
    const user1 = new User("John", 21);
    const result = user1.setAge(26);
    expect(result).toEqual(26);
});