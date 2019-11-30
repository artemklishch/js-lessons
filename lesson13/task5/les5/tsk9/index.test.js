import getCountOfNumbers from './index.js';

it ('should get count of certain numbers', () => {
    const resultOfCertainNumbers = getCountOfNumbers(2,8,2);
    expect(resultOfCertainNumbers).toEqual(4);

});