import {getGreenwichTime} from './index.js';

it ('should return GreenwichTime', () => {
    const result = getGreenwichTime(new Date(2019,0,1,4,30));
    expect(result).toEqual('02:30');
});