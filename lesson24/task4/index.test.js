import {studentsBirthDays} from './index.js';

it ('should sort studens according birthdays', () => {
    const arr = [
        { name: 'Tom', birthDate: '02/15/2010' },
        { name: 'Ben', birthDate: '02/10/2010' },
        { name: 'Sam', birthDate: '06/15/2010' },
        { name: 'Sammy', birthDate: '02/14/2010' } 
    ];
    const result = studentsBirthDays(arr);
    expect(result).toEqual({
        Feb: [ "Ben", "Sammy", "Tom" ],
        Jun: [ "Sam" ],
    });
});