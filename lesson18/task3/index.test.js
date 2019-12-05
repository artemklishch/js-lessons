import { sumOfSquares } from './index.js';

it ('should get sum of squared numbers', () => {
    const result = sumOfSquares(2,4,6);
    expect(56).toEqual(result);
});