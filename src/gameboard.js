import { Ship } from './ship.js'; 

class Gameboard {
  constructor() {
    let grid = []
    for (let x = 0; x < 10; x++) {
      grid[x] = [];
      for (let y = 0; y < 10; y++) {
        grid[x][y] = '-';
      }
    }
    this.grid = grid; 
    this.shipsArray = [];
  }

  convertShipCoordinates(myCoords) {
    let myXCoord = 10 - myCoords.charAt(1); 
    let myYCoord = myCoords.charCodeAt(0) - 65;

    // returns in the format of (0, 0) 
    return `(${myXCoord}, ${myYCoord})`;
  }

  getShipOrientation(ship) {
    // if ship is horizontal 
    let myShipStart = this.convertShipCoordinates(ship.start); 
    let myShipEnd = this.convertShipCoordinates(ship.end);

    if (Math.abs(myShipEnd[1] - myShipStart[1] + 1) === ship.length && myShipEnd[4] === myShipStart[4]) {
      for (let i = 0; i < ship.length; i++) {
        if (Number.isFinite(this.grid[Number(myShipStart[1]) + i][Number(myShipStart[4])])) {
          return 'invalid';
        }
      }
      return 'horizontal';
    }
    
    // if ship is vertical
    if (Math.abs(myShipEnd[4] - myShipStart[4] + 1) === ship.length && myShipEnd[1] === myShipStart[1]) {
      for (let i = 0; i < ship.length; i++) {
        if (Number.isFinite(this.grid[Number(myShipStart[1])][Number(myShipStart[4]) + i])) {
          return 'invalid';
        }
      }
      return 'vertical';
    }

    return 'invalid'; 
  }

  placeShip(shipLength, start, end) {
    let myShip = new Ship(shipLength, start, end);
    let myShipStart = this.convertShipCoordinates(myShip.start);

    switch (this.getShipOrientation(myShip)) {
      case 'horizontal': 
        for (let i = 0; i < myShip.length; i++) {
          this.grid[Number(myShipStart[1]) + i][Number(myShipStart[4])] = myShip.length;
        }
        break;
      case 'vertical':
        for (let i = 0; i < myShip.length; i++) {
          this.grid[Number(myShipStart[1])][Number(myShipStart[4]) + i] = myShip.length;
        }
        break;
      case 'invalid':
        throw Error("Invalid coordinates! Please try again."); 
    }

    this.shipsArray.push(myShip); 
  }

  /*
  receiveAttack(rowCoord, colCoord) {
    if (this.grid[rowCoord][colCoord] === 1) {
      for (let i = 0; i < 5; i++) {
        if (this.shipsArray[i].
      }
    }
  } */ 
}

export { Gameboard }; 