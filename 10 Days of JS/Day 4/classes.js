/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
  constructor(args) {
    this.args = args;
  }

  perimeter() {
    let perimeter = 0;
    for (let i = 0; i < this.args.length; i++) {
      perimeter += this.args[i];
    }
    return perimeter;
  }
}
