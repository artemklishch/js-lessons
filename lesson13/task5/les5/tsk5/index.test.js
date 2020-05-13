import getEvenSum from './index.js';

it('should get sum of even numbers', () => {
    const resultOfSum = getEvenSum(2, 10);
    expect(resultOfSum).toEqual(30);
});