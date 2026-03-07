import { Ship } from './ship.js'; 
import { Gameboard } from './gameboard.js';


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

test("Gameboard Class returns a Gameboard object with a grid property that is a 10 by 10 array", () => {
  let testGameboard = new Gameboard();
  expect(testGameboard).toEqual({ 
    grid: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ] });
});


test("Gameboard Class placeShip function places a Ship at the given coordinates", () => {
  let testGameboard = new Gameboard();
  testGameboard.placeShip(2, 0, 0, 0, 1); 
  console.table(testGameboard.grid); 
  expect(testGameboard.grid).toEqual([
    [1 , 1, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);
});

