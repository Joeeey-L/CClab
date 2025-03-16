/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

let x, y;
let px, py;
let step = 2;
let alphaValue = 255;
let transitionFrame = 0;

let xS, yS;
let vxS, vyS;
let alphaS = 255;
let phaseS = 1;
let changeColor = false;
let rS, gS, bS;
let radS;
let diaS;

let freq;
let amp;
let cosValue, sinValue;
let xx1, xx2, xx, yy;
let angle;
let rad = 0;
let disperse = false;
let g;

function setup() {
    //createCanvas(800, 500);

    //in VS code
    let canvas = createCanvas(800, 500);
    canvas.parent("p5-canvas-container")

    x = width / 2;
    y = height / 2;
    px = random(width);
    py = random(height);

    g = createGraphics(800, 500);
    g.background(0);

    resetSignal();
}

function draw() {
    background(0, 30);
    drawTree();
    image(g, 0, 0);

    drawUniverse();

    //draw signal
    if (phaseS === 1) {
        xS += vxS;
        yS += vyS;

        if (yS >= height - 10) {
            yS = height - 10;
            phaseS = 2;
            vxS = 0;
            vyS = -2;
        }
    } else if (phaseS === 2) {
        yS += vyS;
        alphaS -= 2;
        if (alphaS <= 0) {
            alphaS = 0;
            changeColor = true;
        }
    }

    noStroke();
    fill(255, alphaS * 0.4);
    ellipse(xS, yS, diaS * 1.5);
    fill(rS, gS, bS, alphaS * 0.3);
    ellipse(xS, yS, diaS * 1.3);
    fill(rS, gS, bS, alphaS);
    ellipse(xS, yS, diaS);

    drawSignals(width / 2, 40, 220);
}

function mousePressed() {
    resetSignal();
    rS = random(255);
    gS = random(255);
    bS = random(255);
    diaS = random(4, 6);
}

function resetSignal() {
    if (mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0) {
        xS = mouseX;
        yS = mouseY;
        alphaS = 255;
        phaseS = 1;

        vxS = (width / 2 - xS) * 0.02;
        vyS = (height - yS) * 0.02;
    }
}

function drawSignals(x, number, length) {
    push();
    if (disperse) {
        if (phaseS === 2) {
            if (changeColor) {
                push();
                translate(x, height * 0.1);
                radS += 1;
                for (let i = 0; i < number; i++) {
                    angle = ((PI * 2) / number) * i;
                    let xx = cos(angle) * rad;
                    let yy = sin(angle) * rad;
                    noStroke();
                    fill(rS, gS, bS);
                    circle(xx, yy, diaS);
                    fill(255, 30);
                    circle(xx, yy, diaS * 1.4);
                    if (radS > length) {
                        radS = 0;
                        break;
                    }
                }
            }
        }
    }
    pop();
}

function drawUniverse() {
    let targetFrame = 3000;
    let scaleFactor = map(transitionFrame, 0, targetFrame, 1, 0.3);
    let alphaFactor = map(
        transitionFrame,
        targetFrame * 0.65,
        targetFrame,
        255,
        0,
        true
    );
    transitionFrame++;
    if (transitionFrame > targetFrame + 60) {
        transitionFrame = 0;
    }
    let numStars = 16;

    push();
    translate(width / 2, height / 2);
    scale(scaleFactor);
    rectMode(CENTER);
    rotate(PI * 0.25);
    noFill();

    //draw each stars in the universe;
    for (let x = -1100; x < 1900; x += 3000 / numStars) {
        for (let y = -1250; y < 1750; y += 3000 / numStars) {
            let sizeStars = random(4, 6);
            for (let t = 1; t < sizeStars; t++) {
                push();
                translate(x, y);
                let brightnessStars = map(t, 0, sizeStars, 255, 120);
                let strokeWeightStars = map(t, 0, sizeStars, 2, 0.5);
                stroke(brightnessStars, alphaFactor);
                strokeWeight(strokeWeightStars);
                rect(0, 0, 8 * t, 8 * t);
                pop();
            }
        }
    }
    pop();
}

function drawTree() {
    freq = frameCount * 0.05;
    cosValue = cos(freq);
    sinValue = sin(freq);
    drawTrunk(width / 2, "green");
    drawBranches(width / 2, 40, 220, "green");
    drawPlanets("white");
}

function drawTrunk(x, colorName) {
    g.push();
    g.translate(x, 0);

    amp = map(yy, height, height * 0.1, 40, 5);

    //draw the trunk with threads
    if (!disperse) {
        xx1 = 0;
        xx2 = 0;
        xx1 += sinValue * amp;
        xx2 += -sinValue * amp;
        yy = height;
        yy -= frameCount * 0.6;

        //if the creature is long enough, change the motion
        if (yy < height * 0.1) {
            disperse = true;
        }
        //reset the variables
    } else {
        xx1 = x;
        xx2 = x;
        yy = height * 0.1;
    }
    //draw the curves (threads)
    for (let i = 1; i < 4; i++) {
        g.noStroke();
        g.fill(255, 30);
        g.circle(xx1, yy * 1.1 - i * 10, 4);
        g.circle(xx2, yy * 1.1 - i * 10, 4);
        g.fill(colorName);
        g.circle(xx1, yy * 1.1 - i * 10, 2);
        g.circle(xx2, yy * 1.1 - i * 10, 2);
    }
    g.pop();
}

function drawBranches(x, number, length, colorName) {
    if (disperse) {
        g.push();
        g.translate(x, height * 0.1);
        rad += 1;
        for (let i = 0; i < number; i++) {
            angle = ((PI * 2) / number) * i;
            let xx = cos(angle) * rad;
            let yy = sin(angle) * rad;
            g.noStroke();
            g.fill(colorName);
            g.circle(xx, yy, 2);
            g.fill(255, 30);
            g.circle(xx, yy, 4);
            if (rad > length) {
                rad = 0;
                break;
            }
        }
        g.pop();
    }
}

function drawPlanets(colorName) {
    g.push();
    g.translate(0, 0);
    if (frameCount % 30 == 0 && frameCount < 4500) {
        let xx = random(width);
        let yy = random(height);
        let rad = random(1, 3);
        g.noStroke();
        g.fill(255, 40);
        g.circle(xx, yy, rad * 2);
        g.fill(colorName);
        g.circle(xx, yy, rad);
    }
    g.pop();
}

//if space is pressed, everything restart at the begining;
function keyPressed() {
    if (key === " ") {
        resetSketch();
    }
}

function resetSketch() {
    //reset all the variables
    x = width / 2;
    y = height / 2;
    px = random(width);
    py = random(height);
    alphaValue = 255;
    transitionFrame = 0;
    disperse = false;
    rad = 0;

    xS = mouseX;
    yS = mouseY;
    alphaS = 255;
    phaseS = 1;
    vxS = (width / 2 - xS) * 0.02;
    vyS = (height - yS) * 0.02;
    changeColor = false;
    rS = random(255);
    gS = random(255);
    bS = random(255);
    diaS = random(4, 6);

    g.clear();
    g.background(0);

    // reset frameCount
    yy = height;
    xx1 = 0;
    xx2 = 0;
    frameCount = 0;

    drawTree();
}
