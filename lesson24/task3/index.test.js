import {getDiff} from "./index.js";

it ('should find time difference', () => {
    const result = getDiff(new Date(2019,0,0,0,0,0), new Date(2019,0,1,2,15,10));
    expect(result).toEqual('1d 2h 15m 10s');
});

it ('should find time difference', () => {
    const result = getDiff(new Date(2019,2,5,7,30,0), new Date(2019,0,1,2,15,10));
    expect(result).toEqual('63d 5h 14m 49s');
});