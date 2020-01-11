import { compose } from './index.js';

it ('should check composing function', () => {
    const add2 = value => value + 2;
    const square = value => value * value; 
    const half = value => value / 2;
    const doEverything = compose(
        add2,
        square,
        half,
    );
    const result = doEverything(4);
    expect(result).toEqual(18);
})