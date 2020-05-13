import getMinSquaredNumber from './getMinSquaredNumber.js';

it('should get squared number', () => {
    const resultInRightArray = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
    expect(resultInRightArray).toEqual(4);

    const resultInEmptyArray = getMinSquaredNumber([]);
    expect(resultInEmptyArray).toEqual(null);
    
    const resultInCaseOfString = getMinSquaredNumber("string");
    expect(resultInCaseOfString).toEqual(null);
});