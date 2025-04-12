// CCLab Mini Project - 9.R Particle World Template

let MAX_OF_PARTICLES = 965;
let particles = [];

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(0, 10);

  for (i = 0; i < 8; i++) {
    particles.push(new Particle(random(width), height - 60));
  }

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
    p.checkLifespan();
    if (p.isDone) {
      particles.splice(i, 1);
    }
  }

  if (particles.length > MAX_OF_PARTICLES) {
    particles.splice(0, 1);
  }
}

class Particle {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.dia = random(15, 40);
    this.lifespan = 255;

    this.vx = random(-0.3, 0.3);
    this.vy = random(-2, -0.5);
    this.acc = random(-0.01, 0);

    this.isDone = false;
  }
  update() {
    this.vy += this.acc;
    this.x += this.vx;
    this.y += this.vy;
    this.lifespan -= 2.125;
  }
  display() {
    let r = map(this.lifespan, 255, 0, 255, 100);
    let g = map(this.lifespan, 255, 0, 170, 0);
    let b = 0;

    push();
    translate(this.x, this.y);
    noStroke();
    fill(r, g, b, this.lifespan);
    circle(0, 0, this.dia);
    pop();
  }
  checkLifespan() {
    if (this.lifespan < 0) {
      this.lifespan = 0;
      this.isDone = true;
    }
  }
}