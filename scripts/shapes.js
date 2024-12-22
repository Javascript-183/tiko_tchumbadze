// @ts-check
"use strict";

class Shape {
    constructor(name) {
        this.name = name;
    }

    area() {
        console.log(`Area calculation not implemented for generic shape.`)
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    area() {
        console.log (`Area of Circle: ${Math.PI * this.radius * this.radius}`)
    }
}

class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    area() {
        console.log (`Area of Rectangle: ${this.width * this.height}`)
    }
}

class Triangle extends Shape {
    constructor(name, base, height) {
        super(name);
        this.base = base;
        this.height = height;
    }
    area() {
        console.log(`Area of Triangle: ${(this.base * this.height)/2}`)
    }
}
let circle = new Circle("Circle", 5)
circle.area();

let rectangle = new Rectangle("Rectangle", 4, 6);
rectangle.area();

let triangle = new Triangle("Triangle", 2, 6);
triangle.area();

let shape = new Shape(`name`)
shape.area()