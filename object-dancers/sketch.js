let dancer;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  dancer = new JoeyDancer(width / 2, height / 2);
}

function draw() {
  background(0);
  drawFloor();

  dancer.update();
  dancer.display();
}

class JoeyDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.startX = startX;
    this.rad = 15;
    this.state = false;
    //to update body position
    this.targetBodyPosition = 0;
    //to update feet angle
    this.targetFeetAngle = 0;
    this.feetAngle = 0;
    //to update the position of star and face
    this.targetStarPosition = 0;
    this.xStar = 0;
    //to change the facial expression
    this.randomExpression = 0;
    //to update arms
    this.targetRightArmPosition = 0;
    this.xRightArm = 0;
    this.targetLeftArmPosition = 0;
    this.xLeftArm = 0;
  }
  update() {
    let remainder = frameCount % 60;
    if (remainder == 0) {
      this.state = !this.state;
      this.updateExpression();
    }
    this.updateBodyPosition();
    this.updateStarPosition();
    this.updateFeetAngle();
    this.updateRightArmPosition();
    this.updateLeftArmPosition();
  }
  updateBodyPosition() {
    if (this.state == true) {
      this.targetBodyPosition = this.startX - 80;
    } else {
      this.targetBodyPosition = this.startX + 80;
    }
    this.x = lerp(this.x, this.targetBodyPosition, 0.15);
  }
  updateStarPosition() {
    if (this.state == true) {
      this.targetStarPosition = -10;
    } else {
      this.targetStarPosition = 10;
    }
    this.xStar = lerp(this.xStar, this.targetStarPosition, 0.15);
  }
  updateFeetAngle() {
    if (this.state == true) {
      this.targetFeetAngle = -PI / 12;
    } else {
      this.targetFeetAngle = PI / 12;
    }
    this.feetAngle = lerp(this.feetAngle, this.targetFeetAngle, 0.15);
  }
  updateExpression() {
    this.randomExpression = floor(random(4));
  }
  updateRightArmPosition() {
    if (this.state == true) {
      this.targetRightArmPosition = -18;
    } else {
      this.targetRightArmPosition = 15;
    }
    this.xRightArm = lerp(this.xRightArm, this.targetRightArmPosition, 0.15);
  }
  updateLeftArmPosition() {
    if (this.state == true) {
      this.targetLeftArmPosition = -15;
    } else {
      this.targetLeftArmPosition = 18;
    }
    this.xLeftArm = lerp(this.xLeftArm, this.targetLeftArmPosition, 0.15);
  }
  display() {

    push();
    translate(this.x, this.y);

    this.drawBody();
    this.drawStar();
    this.drawFeet();
    this.drawFace();
    this.drawRightArm();
    this.drawLeftArm();

    pop();
  }
  drawBody() {
    noStroke();
    fill("#db98ff");
    ellipse(0, 0, 110, 140);
    circle(0, -65, 70);
    circle(-40, -40, 55);
    circle(40, -40, 55);
    circle(-50, 5, 65);
    circle(50, 5, 65);
    circle(-40, 45, 35);
    circle(40, 45, 35);
  }
  drawStar() {
    push();
    translate(this.xStar, -75);
    fill("#fef05c");
    beginShape();
    for (let i = 0; i < 5; i++) {
      let outerX = cos((i * 2 * PI) / 5 - PI / 2) * this.rad;
      let outerY = sin((i * 2 * PI) / 5 - PI / 2) * this.rad;
      let innerX = cos((i * 2 * PI) / 5 - PI / 2 + PI / 5) * (this.rad / 2.5);
      let innerY = sin((i * 2 * PI) / 5 - PI / 2 + PI / 5) * (this.rad / 2.5);
      vertex(outerX, outerY);
      vertex(innerX, innerY);
    }
    endShape(CLOSE);
    pop();
  }
  drawFeet() {
    noStroke();
    fill("#db98ff");
    //update feet angle respectively
    push();
    translate(0, 70);
    rotate(this.feetAngle);
    ellipse(0, 0, 25, 40);
    pop();

    push();
    translate(-20, 65);
    rotate(this.feetAngle);
    ellipse(0, 0, 25, 40);
    pop();

    push();
    translate(20, 65);
    rotate(this.feetAngle);
    ellipse(0, 0, 25, 40);
    pop();
  }
  drawFace() {
    push();
    translate(this.xStar, -50);
    if (this.randomExpression == 0) {
      fill(0);
      circle(-20, 0, 5);
      circle(20, 0, 5);
      stroke(0);
      noFill();
      arc(0, 3, 20, 10, PI * 0.2, PI * 0.8);
      arc(-11, 6, 10, 10, PI * -0.3, PI * 0.4);
      arc(11, 6, 10, 10, PI * 0.6, PI * 1.3);
    }
    if (this.randomExpression == 1) {
      fill(0);
      stroke(0);
      circle(-20, 0, 5);
      circle(20, 0, 5);
      line(-25, -8, -20, -6);
      line(25, -8, 20, -6);
      noFill();
      arc(0, 4, 20, 10, PI * 0.1, PI * 0.8);
      arc(12, 3, 10, 10, PI * 0.4, PI);
    }
    if (this.randomExpression == 2) {
      stroke(0);
      noFill();
      arc(-20, 0, 5, 8, 0, PI);
      arc(20, 0, 5, 8, 0, PI);
      arc(0, 5, 30, 10, PI * 0.1, PI * 0.9);
      line(-25, -8, -20, -6);
      line(25, -8, 20, -6);
    }
    if (this.randomExpression == 3) {
      stroke(0);
      noFill();
      arc(-20, 0, 10, 8, PI * 1.2, PI * 1.9);
      arc(20, 0, 10, 8, PI * 1.1, PI * 1.8);
      noStroke();
      fill("#492a63");
      arc(0, 1, 10, 20, 0, PI, OPEN);
    }
    pop();
  }
  drawRightArm() {
    push();
    translate(this.xRightArm, 0);
    noFill();
    stroke("#db98ff");
    strokeWeight(8);
    arc(-50, -55, 100, 100, PI * 0.5, PI * 0.9, OPEN);

    pop();
  }
  drawLeftArm() {
    push();
    translate(this.xLeftArm, 0);
    noFill();
    stroke("#db98ff");
    strokeWeight(8);
    arc(50, -55, 100, 100, PI * 0.1, PI * 0.5, OPEN);
    pop();
  }
}