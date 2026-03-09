import { Ship } from './ship.js'; 
import { Gameboard } from './gameboard.js';


test("Ship Class returns a Ship object with given length, 0 hits, and not sunk", () => {
  let testShip = new Ship(5, 'A1', 'E1'); 
  expect(testShip).toEqual({
    length: 5, hits: 0, sunk: false, start: 'A1', end: 'E1', coordsArray: []  
  });
}); 

test("Ship Class' hit() function increases Ship hits by one, without exceeding Ship length", () => {
  let testShip = new Ship(2, 'B5', 'C5'); 
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
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
  ],
  shipsArray: [] });
});

test("Gameboard Class placeShip function places a Ship at the given coordinates", () => {
  let testGameboard = new Gameboard();
  testGameboard.placeShip(3, 'A1', 'C1'); 
  expect(testGameboard.grid).toEqual([
    ['-',  '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-',  '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-',  '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-',  '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-',  '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-',  '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-',  '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-',  '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-',  '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    [3, 3, 3, '-', '-',  '-', '-', '-', '-', '-']
  ]);
});

/*
test("Gameboard Class placeShip function does not place a Ship at invalid coordinates", () => {
  let testGameboard = new Gameboard();
  testGameboard.placeShip(3, 'A1', 'C1'); 
  testGameboard.placeShip(2, 'B1', 'B2'); 
  expect(testGameboard.grid).toEqual([
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 
    [3, 3, 3, '-', '-', '-', '-', '-', '-', '-']
  ]);
});
*/

