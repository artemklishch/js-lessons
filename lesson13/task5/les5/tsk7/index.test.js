import getBiggerNumber from './index.js';

it ('should bigger number', () => {
    const resultLessNum = getBiggerNumber(5,6);
    expect(resultLessNum).toEqual(5);

    const resultBiggerNum = getBiggerNumber(6,5);
    expect(resultBiggerNum).toEqual(11);

    const resultNoIntegerNum = getBiggerNumber(6.5, 7);
    expect(resultNoIntegerNum).toEqual(null);
});