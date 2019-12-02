import { createCalculator } from './index.js';

it ('should check calculator', () => {
    //fist calculator
    const calc1 = createCalculator();
    
    calc1.add(10); 
    const resultAddCalc1 = calc1.getMemo();
    expect(resultAddCalc1).toEqual(10);

    calc1.decrease(2);
    const resultDecreseCalc1 = calc1.getMemo();
    expect(resultDecreseCalc1).toEqual(8);

    calc1.reset();
    const resultResetCalc1 = calc1.getMemo();
    expect(resultResetCalc1).toEqual(0);
    
    
    //second the same calculator
    const calc2 = createCalculator();
    
    calc2.add(20); 
    const resultAddCalc2 = calc2.getMemo();
    expect(resultAddCalc2).toEqual(20);

    calc2.decrease(4);
    const resultDecreseCalc2 = calc2.getMemo();
    expect(resultDecreseCalc2).toEqual(16);

    calc2.reset();
    const resultResetCalc2 = calc2.getMemo();
    expect(resultResetCalc2).toEqual(0);

    
});