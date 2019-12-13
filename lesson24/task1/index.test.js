import {dayOfWeek} from './index.js';

it ('should get weekday', () => {
    const result = dayOfWeek(new Date(2019,0,1), 14);
    expect(result).toEqual('Tu');
});