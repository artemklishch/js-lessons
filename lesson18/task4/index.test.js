import { spy } from './index.js';

//first test
it ("should check function, first-test", () => {
    function test(a, b) {
        return (a + b);
    }
    const spyTest = spy(test);
    const resTest = spyTest(4, 2);
    expect(resTest).toEqual(6);
});

//second test
it ("should write array of calls", () => {
    function test(a, b) {
        return (a + b);
    }
    const spyTest = spy(test);
    spyTest(4, 2);
    spyTest(9, 1);   
    const arr = [[4,2],[9,1]];
    const resCallsArray = spyTest.calls;
    expect(resCallsArray).toEqual(arr);
});

//third test
it ("should check func in object", () => {
    const user = {
        name: 'John',
        sayHi() {
            return this.name;
        }
    };
    const spyMethod = spy(user.sayHi);
    const resObj = spyMethod.apply({ name: 'Tom' });    
    expect(resObj).toEqual("Tom");
});