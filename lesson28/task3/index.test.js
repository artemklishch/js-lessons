import { mult, twice, triple } from './index.js';

it ('should check currying multiply', () => {
    const result = mult(5)(4);
    expect(result).toEqual(20);
})

it ('should check currying for twice', () => {
    const result = twice(7);
    expect(result).toEqual(14);
})

it ('should check currying for triple', () => {
    const result = triple(9);
    expect(result).toEqual(27);
})