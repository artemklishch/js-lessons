import {pickProps} from './index.js';

it ('should return object of certain props', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const arr = ['a', 'c'];
    const resultObj = pickProps(obj, arr);
    expect(resultObj).toEqual({ a: 1, c: 3 });
    
    const notAnObject = pickProps("string", []);
    expect(notAnObject).toEqual(null);

    const notAnArray = pickProps({},"string");
    expect(notAnArray).toEqual(null);
});