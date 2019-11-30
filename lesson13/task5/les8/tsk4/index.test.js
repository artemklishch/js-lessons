import {getAdults} from './index.js';

it ('shoul object of adults', () => {
    const obj = { 'John Doe': 19, 'Tom': 17, 'Bob': 18 };
    const objOfAdults = getAdults(obj);
    expect(objOfAdults).toEqual({ 'John Doe': 19, 'Bob': 18 });

    const notAnObject = getAdults("string");
    expect(notAnObject).toEqual(null);

    const undefinedArg = getAdults();
    expect(undefinedArg).toEqual(null);
});