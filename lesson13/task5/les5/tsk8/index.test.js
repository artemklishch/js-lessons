import getBoolean from './index.js';

it ('should get bigger sum', () => {
    const resultTrue = getBoolean(2,4,4,4);
    expect(resultTrue).toEqual(true);

    const resultFalse = getBoolean(4,4,2,4);
    expect(resultFalse).toEqual(false);

    const resultNull = getBoolean(2,4,5);
    expect(resultNull).toEqual(null);
});