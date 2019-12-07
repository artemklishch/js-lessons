import { Ship } from './index.js';

it ('should check creating object', () => {
    const ship1 = new Ship("Argo", 20);
    expect(ship1).toEqual({name:"Argo", numberOfWheels:false, maxSpeed:20});
});

it ('should check method move() object', () => {
    const ship1 = new Ship("Argo", 20);
    const result = ship1.move();
    expect(result).toEqual(console.log(`Argo lifting anchor up`),console.log(`Argo is moving`));
});

it ('should check method stop() object', () => {
    const ship1 = new Ship("Argo", 20);
    const result = ship1.move();
    expect(result).toEqual(console.log(`Argo stopped`),console.log(`Argo lifting anchor down`));
});