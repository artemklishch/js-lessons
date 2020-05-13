import { calc } from './index.js';

it ('should get result in chaning function', () => {
    const result = calc(3).add(2).mult(4).div(10).subtract(5).result(); 
    expect(result).toEqual(-3);
})