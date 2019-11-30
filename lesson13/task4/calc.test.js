import {calc} from './calc.js';

it ('should check math operation', () => {
    const resultPlus = calc("4 + 2");
    expect(resultPlus).toEqual("4 + 2 = 6");

    const resultMinus = calc("4 - 2");
    expect(resultMinus).toEqual("4 - 2 = 2");

    const resultMult = calc("4 * 2");
    expect(resultMult).toEqual("4 * 2 = 8");

    const resultDev = calc("4 / 2");
    expect(resultDev).toEqual("4 / 2 = 2");

    const resultInNoString = calc(23);
    expect(resultInNoString).toEqual(null);
});