class Ship {
  constructor(length, start, end) {
    this.length = length;
    this.hits = 0;
    this.sunk = false; 
    this.start = start;
    this.end = end; 
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