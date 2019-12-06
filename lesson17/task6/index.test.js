import { bind } from './index.js';


//first test
it("should be used instead method .bind()", () => {
    const bruce = { name: "Bruce" };
    function update(occupation, birthYear){
        this.birthYear = birthYear;
        this.occupation = occupation;
    }

    const updateBruce = bind(update, bruce, 1949);
    updateBruce("actor");
    const resOnlyOccupation = bruce.occupation;
    expect(resOnlyOccupation).toEqual("actor");
});

//second test
it("should be used instead method .bind()", () => {
    const bruce = { name: "Bruce" };
    const madeline = { name: "Madeline" };
    function update(occupation, birthYear){
        this.birthYear = birthYear;
        this.occupation = occupation;
    }

    const updateBruce = bind(update, bruce, 1949);
    updateBruce.call(madeline, "king", 1274); 
    const resOnlyYear = bruce.birthYear;
    expect(resOnlyYear).toEqual(1274);
});

//third test
it("should be used instead method .bind()", () => {
    const bruce = { name: "Bruce" };
    const madeline = { name: "Madeline" };
    function update(occupation, birthYear){
        this.birthYear = birthYear;
        this.occupation = occupation;
    }

    const updateBruce = bind(update, bruce, 1949);
    updateBruce("actor");
    updateBruce.call(madeline, "king", 1274); 
    const resNewOccupation = bruce.occupation;
    expect(resNewOccupation).toEqual("king");
});