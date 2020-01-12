import { shmoment } from './index.js';

it ('should check work of changing date', () => {
    const result = shmoment(new Date(2020, 0, 7, 17, 17, 17))
        .add('minutes', 2)
        .add('days', 8)
        .subtract('years', 1)
        .result()
        .getTime();
    expect(result).toEqual(1547565557000);
})