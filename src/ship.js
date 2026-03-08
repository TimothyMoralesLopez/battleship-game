class Ship {
  constructor(length, startingX, startingY, endingX, endingY) {
    this.length = length;
    this.hits = 0;
    this.sunk = false; 
    this.startingX = startingX;
    this.startingY = startingY;
    this.endingX = endingX;
    this.endingY = endingY; 
    this.coordsArray = [];
  }

  hit() {
    if (this.hits < this.length) {
      this.hits++;
    } 
  }

  isSunk() {
    if (this.hits === this.length) {
      this.sunk = true; 
    }
  }
}

export { Ship }; 