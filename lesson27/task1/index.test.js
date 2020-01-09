import { getLocalStorageData } from './index.js';

it ('should return object of storage data', () => {
    localStorage.setItem('name','Tom');
    localStorage.clear();
    localStorage.setItem('hobbies', JSON.stringify({name: 'Tom',}));
    localStorage.setItem('name', 'Tom');
    localStorage.setItem('age', JSON.stringify(17));
    const result = getLocalStorageData();
    const obj = {
        name: "Tom",
        hobbies: { name: "Tom" },
        age: 17
    }
    expect(result).toEqual(obj);
})