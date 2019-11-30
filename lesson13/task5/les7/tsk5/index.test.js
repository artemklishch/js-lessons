import {squareArray} from './index.js';

it ('should return array of squared numbers', () => {
    const resultOfSquaredNums = squareArray([2,4,6]);
    expect(resultOfSquaredNums).toEqual([4,16,36]);

    const resultOfNoArray = squareArray("string");
    expect(resultOfNoArray).toEqual(null);

    const resultOfEmptyArray = squareArray([]);
    expect(resultOfEmptyArray).toEqual(null);
});