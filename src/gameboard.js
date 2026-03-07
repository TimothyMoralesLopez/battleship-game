import { Ship } from './ship.js'; 

class Gameboard {
  constructor() {
    let grid = []
    for (let x = 0; x < 10; x++) {
      grid[x] = [];
      for (let y = 0; y < 10; y++) {
        grid[x][y] = 0;
      }
    }
    this.grid = grid; 
  }

  getShipOrientation(ship) {

    // if ship is horizontal 
    if (Math.abs(ship.endingX - ship.startingX + 1) === ship.length && ship.endingY === ship.startingY) {
      for (let i = 0; i < ship.length; i++) {
        if (this.grid[ship.startingX + i][ship.startingY] === 1) {
          return 'invalid';
        }
      }
      return 'horizontal';
    }
    
    // if ship is vertical
    if (Math.abs(ship.endingY - ship.startingY + 1) === ship.length && ship.endingX === ship.startingX) {
      for (let i = 0; i < ship.length; i++) {
        if (this.grid[ship.startingX][ship.startingY + i] === 1) {
          return 'invalid';
        }
      }
      return 'vertical';
    }
  }

  placeShip(shipLength, startX, startY, endX, endY) {
    let myShip = new Ship(shipLength, startX, startY, endX, endY);
    switch (this.getShipOrientation(myShip)) {
      case 'horizontal': 
        for (let i = 0; i < myShip.length; i++) {
          this.grid[myShip.startingX + i][myShip.startingY] = 1;
        }
        break;
      case 'vertical':
        for (let i = 0; i < myShip.length; i++) {
          this.grid[myShip.startingX][myShip.startingY + i] = 1;
        }
        break;
      case 'invalid':
        throw Error("Invalid coordinates! Please try again."); 
    }
  }
}

export { Gameboard }; 