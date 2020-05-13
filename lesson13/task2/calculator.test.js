import getSum, {getSquaredArray, getOddNumbers} from './calculator.js';

it('should get squared array', () => {
    const result = getSquaredArray([1,2,3]);
    expect(result).toEqual([1,4,9]);
});

it('should keep odd numbers array', () => {
    const result = getOddNumbers([1,2,3]);
    expect(result).toEqual([1,3]);
});

it('should get sum of numbers', () => {
    const result = getSum(8,4);
    expect(result).toEqual(12);
});