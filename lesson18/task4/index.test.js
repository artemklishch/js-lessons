import { spy } from './index.js';

it ("should write array of calls", () => {
    function test(a, b) {
        return (a + b);
    }
    const user = {
        name: 'John',
        sayHi() {
            return this.name;
        }
    };
    const spyTest = spy(test);
    const spyMethod = spy(user.sayHi);
    
   
    //first test
    const resTest = spyTest(4, 2);
    expect(resTest).toEqual(6);
    spyTest(9, 1);
   
    //second test
    const arr = [[4,2],[9,1]];
    const resCallsArray = spyTest.calls;
    expect(resCallsArray).toEqual(arr);

    //third test
    const resObj = spyMethod.apply({ name: 'Tom' });    
    expect(resObj).toEqual("Tom");
});