class Shape {
    calculateArea() {
        console.log("None.");
    }
}

class Square extends Shape {
    constructor(inputValue) {
        super();
        this.sideLength = inputValue;
    }

    calculateArea() {
        console.log(this.sideLength * this.sideLength);
    }
}

class Circle extends Shape {
    constructor(inputValue) {
        super();
        this.radius = inputValue;
    }

    calculateArea() {
        console.log(this.radius * this.radius * 3.14);
    }
}

const unknownShape = new Shape();
const newSquare = new Square(5);
const newCircle = new Circle(5);

unknownShape.calculateArea();
newSquare.calculateArea();
newCircle.calculateArea();