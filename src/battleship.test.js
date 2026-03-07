import { Ship } from './ship.js';

test("Ship Class returns a Ship object with given length, 0 hits, and not sunk", () => {
  let testShip = new Ship(5); 
  expect(testShip).toEqual({
    length: 5, hits: 0, sunk: false 
  });
}); 

test("Ship Class' hit() function increases Ship hits by one, without exceeding Ship length", () => {
  let testShip = new Ship(2); 
  expect(testShip.hits).toBe(0); 
  testShip.hit(); 
  expect(testShip.hits).toBe(1); 
  testShip.hit();
  expect(testShip.hits).toBe(2); 
  testShip.hit();
  expect(testShip.hits).not.toBe(3); 
  testShip.hit();
  expect(testShip.hits).toBe(2); 
}); 

