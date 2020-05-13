import { makeCounter } from './index.js';

it ('should check correct work of counters', () => {
    const counter1 = makeCounter();
    counter1();
    const result = counter1();
    expect(result).toEqual(1);
});