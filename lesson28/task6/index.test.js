import { maxFibonacci } from './index.js';

it ('should get Fibonacci number before value', () => {
    const result = maxFibonacci(15);
    expect(result).toEqual(13);
})

it ('should get Fibonacci number before value', () => {
    const result = maxFibonacci(22);
    expect(result).toEqual(21);
})

it ('should get Fibonacci number before value', () => {
    const result = maxFibonacci(0.1);
    expect(result).toEqual(0);
})