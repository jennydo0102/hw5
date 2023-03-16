class Square {
    constructor(side) {
      this.side = side;
    }
  
    perimeter() {
      return this.side * 4;
    }
  
    area() {
      return this.side ** 2;
    }
  
    diagonal() {
      return Math.sqrt(2 * this.side ** 2);
    }
  
    describe() {
      const perimeter = this.perimeter();
      const area = this.area();
      const diagonal = this.diagonal().toFixed(3);
      console.log(`Square with side ${this.side} has perimeter of ${perimeter}, area of ${area}, and diagonal of ${diagonal}.`);
    }
  }
  
  const square1 = new Square(2);
  const square2 = new Square(5);
  const square3 = new Square(8);
  
  square1.describe();
  square2.describe();
  square3.describe();
  