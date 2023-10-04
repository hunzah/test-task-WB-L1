// Базовый класс Shape
class Shape {
    // Конструктор принимает название фигуры
    constructor(name) {
      this.name = name;
    }
  
    calculateArea() {}
  

    calculatePerimeter() {}
  }
  
  // Подкласс Rectangle (прямоугольник)
  class Rectangle extends Shape {
    constructor(width, height) {
      super("Прямоугольник");
      this.width = width;
      this.height = height;
    }
    // Переопределение метода calculateArea для прямоугольника
    calculateArea() {
      return this.width * this.height;
    }
    // Переопределение метода calculatePerimeter для прямоугольника
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  // Подкласс Circle (круг)
  class Circle extends Shape {
    // Конструктор принимает радиус круга
    constructor(radius) {
      super("Круг");
      this.radius = radius;
    }
  
    // Переопределение метода calculateArea для круга
    calculateArea() {
      return Math.PI * this.radius ** 2;
    }
  
    // Переопределение метода calculatePerimeter для круга
    calculatePerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Подкласс Triangle (треугольник)
  class Triangle extends Shape {
    // Конструктор принимает длины трех сторон треугольника
    constructor(side1, side2, side3) {
      super("Треугольник");
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
  
    // Переопределение метода calculateArea для треугольника
    calculateArea() {
      // Используем формулу Герона для расчета площади
      const s = (this.side1 + this.side2 + this.side3) / 2;
      return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }
  
    // Переопределение метода calculatePerimeter для треугольника
    calculatePerimeter() {
      return this.side1 + this.side2 + this.side3;
    }
  }
  

  const rectangle = new Rectangle(5, 10);
  console.log(rectangle.name); 
  console.log(rectangle.calculateArea());
  console.log(rectangle.calculatePerimeter()); 
  
  const circle = new Circle(7);
  console.log(circle.name); 
  console.log(circle.calculateArea()); 
  console.log(circle.calculatePerimeter()); 
  
  const triangle = new Triangle(3, 4, 5);
  console.log(triangle.name); 
  console.log(triangle.calculateArea()); 
  console.log(triangle.calculatePerimeter()); 
  