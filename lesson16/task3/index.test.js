import { createArrayOfFunctions } from './index.js';

it ('should return index', () => {
    const result = createArrayOfFunctions(10)[4]();
    expect(result).toEqual(4);

    const resultOfEmpty = createArrayOfFunctions();
    expect(resultOfEmpty).toEqual([]);

    const resulNull = createArrayOfFunctions("string");
    expect(resulNull).toEqual(null);
});