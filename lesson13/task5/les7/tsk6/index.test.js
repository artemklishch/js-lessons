import {reverseArray} from './index.js';

it ('should reversed array', () => {
    const reversedArray = reverseArray([1,2,3,4]);
    expect(reversedArray).toEqual([4,3,2,1]);

    const noArray = reverseArray("string");
    expect(noArray).toEqual(null);

    const emptyArray = reverseArray([]);
    expect(emptyArray).toEqual(null);
});