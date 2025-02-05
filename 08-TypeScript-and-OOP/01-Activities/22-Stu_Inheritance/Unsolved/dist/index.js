"use strict";
// Define a Shape class
class Shape {
    constructor(name) {
        this.name = name;
    }
    // Methods to calculate the area and perimeter
    calculateArea() {
        return 0;
    }
    calculatePerimeter() {
        return 0;
    }
    // Method to display the shape information
    displayInfo() {
        console.log(`----------${this.name}----------`);
        console.log(`Area: ${this.calculateArea()}`);
        console.log(`Perimeter: ${this.calculatePerimeter()}`);
        console.log();
    }
}
// TODO: Define a Circle class
class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
// TODO: Define a Rectangle class
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
// TODO: Define a Triangle class
class Triangle extends Shape {
    constructor(name, side1, side2, side3) {
        super(name);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    calculateArea() {
        return (this.side1 * this.side2) / 2;
    }
    calculatePerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
}
// TODO: Call the displayInfo method for the Circle, Rectangle, and Triangle classes
console.log(new Circle('Circle', 5).displayInfo());
console.log(new Rectangle('Rectangle', 10, 20).displayInfo());
console.log(new Triangle('Triangle', 3, 4, 5).displayInfo());
