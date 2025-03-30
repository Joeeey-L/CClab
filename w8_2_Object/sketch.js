//let b;
let creatureA, creatureB;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  // b = new Ball();

  //call, retrigger, access memory space, and grab the values
  creatureA = new Creature(200, 250, 80);
  creatureB = new Creature(600, 250, 200);
}

function draw() {
  background(220);

  // b.move();
  // b.display();
  creatureA.display();
  creatureB.display();

}

// //class (blueprint, desgin, plan)
// class Ball {
//   constructor() {
//     //properties(variables)
//     this.x = width / 2;
//     this.y = height / 2;
//     this.dia = 100;

//     this.xSpeed = random(-2, 2);
//     this.ySpeed = random(-2, 2);
//   }
//   //methods
//   display() {
//     circle(this.x, this.y, this.dia);
//   }
//   move() {
//     this.x += this.xSpeed;
//     this.y += this.ySpeed;
//   }
// }

class Creature {
  constructor(tempX, tempY, dia) {
    this.x = tempX;
    this.y = tempY;
    this.dia = dia;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  display() {
    push();
    translate(this.x, this.y);

    fill(this.r, this.g, this.b);
    circle(0, 0, this.dia);

    this.drawArm();

    pop();
  }
  drawArm() {
    push();
    ellipse(this.dia, 0, this.dia, 30);
    pop();
  }
}