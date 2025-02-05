// Define a Shape class
class Shape {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Methods to calculate the area and perimeter
  calculateArea(): number {
    return 0;
  }

  calculatePerimeter(): number {
    return 0;
  }

  // Method to display the shape information
  displayInfo(): void {
    console.log(`----------${this.name}----------`);
    console.log(`Area: ${this.calculateArea()}`);
    console.log(`Perimeter: ${this.calculatePerimeter()}`);
    console.log();
  }
}

// TODO: Define a Circle class
class Circle extends Shape {
  constructor(private radius: number) {
    super('Circle');
  }
  
  override calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  override calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
// TODO: Define a Rectangle class
class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super('Rectangle');
  }

  override calculateArea(): number {
    return this.width * this.height;
  }

  override calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

// TODO: Define a Triangle class
class Triangle extends Shape {
  constructor(private side1: number, private side2: number, private side3: number) {
    super('Triangle');
  }

  override calculateArea(): number {
    return (this.side1 * this.side2) / 2;
  }


  override calculatePerimeter(): number {
    return this.side1 + this.side2 + this.side3;
  }
}

// TODO: Call the displayInfo method for the Circle, Rectangle, and Triangle classes
console.log(new Circle(5).displayInfo());
console.log(new Rectangle(10, 20).displayInfo());
console.log(new Triangle(3, 4, 5).displayInfo());
