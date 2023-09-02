class Shape {

    perimeter = () =>{}

    area = () =>{}
}

class Rectangle extends Shape {

    constructor(length,breadth){
        super();
        this.length = length;
        this.breadth = breadth;
    }
    area = () =>{
        return this.length*this.breadth;
    }

    perimeter = () =>{
        return (this.length+this.breadth)*2;
    }
}

class Circle extends Shape {

    constructor(radius){
        super();
        this.radius = radius;
    }
    area = () =>{
        return this.radius*this.radius*3.14;
    }

    perimeter = () =>{
        return this.radius*2*3.14;
    }
}

const rect = new Rectangle(5,2);
console.log("area of rectangle",rect.area());
console.log("perimeter of rectangle",rect.perimeter());

const circle = new Circle(5);
console.log("area of circle",circle.area());
console.log("perimeter of circle",circle.perimeter());