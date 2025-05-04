//this sketch is used to show the exhibition.
let furnitureManager;
let furnitureImage0, furnitureImage1, furnitureImage2, furnitureImage3, furnitureImage4, furnitureImage5, furnitureImage6, furnitureImage7, furnitureImage8, furnitureImage9, furnitureImage10, furnitureImage11;
let infoImage1, infoImage2, infoImage3, infoImage4, infoImage5, infoImage6, infoImage7, infoImage8, infoImage9, infoImage10, infoImage11;

function preload() {
  furnitureImage0 = loadImage("assets/room.png");
  furnitureImage1 = loadImage("assets/cat.png");
  furnitureImage2 = loadImage("assets/climber.png");
  furnitureImage3 = loadImage("assets/dryer.png");
  furnitureImage4 = loadImage("assets/tv.png");
  furnitureImage5 = loadImage("assets/microwave.png");
  furnitureImage6 = loadImage("assets/sofa.png");
  furnitureImage7 = loadImage("assets/plant.png");
  furnitureImage8 = loadImage("assets/shelf.png");
  furnitureImage9 = loadImage("assets/phone.png");
  furnitureImage10 = loadImage("assets/table.png");
  furnitureImage11 = loadImage("assets/light.png");

  infoImage1 = loadImage("assets/info_cat.png");
  infoImage2 = loadImage("assets/info_climber.png");
  infoImage3 = loadImage("assets/info_dryer.png");
  infoImage4 = loadImage("assets/info_tv.png");
  infoImage5 = loadImage("assets/info_microwave.png");
  infoImage6 = loadImage("assets/info_sofa.png");
  infoImage7 = loadImage("assets/info_plant.png");
  infoImage8 = loadImage("assets/info_shelf.png");
  infoImage9 = loadImage("assets/info_phone.png");
  infoImage10 = loadImage("assets/info_table.png");
  infoImage11 = loadImage("assets/info_light.png");
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  furnitureManager = new FurnitureManager();
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage1, infoImage1, 315, 35, 70, 40);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage2, infoImage2, 285, 125, 120, 130);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage3, infoImage3, 155, 95, 40, 50);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage4, infoImage4, 10, -40, 180, 120);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage5, infoImage5, -290, -75, 85, 50);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage6, infoImage6, 40, 115, 110, 130);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage7, infoImage7, -180, 90, 60, 200);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage8, infoImage8, -285, 70, 100, 230);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage9, infoImage9, -50, 110, 50, 50);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage10, infoImage10, 150, 155, 65, 60);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage11, infoImage11, 0, -220, 160, 50);
}

function draw() {
  //background(220);
  image(furnitureImage0, width / 2, height / 2, width, height);
  furnitureManager.display();

  if (furnitureManager.popup) {
    furnitureManager.popup.display();
  }
}

function mousePressed() {
  if (furnitureManager.popup) {
    furnitureManager.popup.checkClick(mouseX, mouseY);
  } else {
    furnitureManager.checkInfoClicked(mouseX, mouseY);
  }
}

class Furniture {
  constructor(startX, startY, furnitureImage, infoImage, hitboxOffsetX, hitboxOffsetY, hitboxW, hitboxH) {
    this.x = startX;
    this.y = startY;
    this.furnitureImage = furnitureImage;
    this.infoImage = infoImage;

    this.hitboxOffsetX = hitboxOffsetX;
    this.hitboxOffsetY = hitboxOffsetY;
    this.hitboxW = hitboxW;
    this.hitboxH = hitboxH;
  }

  display() {
    imageMode(CENTER);
    image(this.furnitureImage, this.x - 20, this.y, width, height);
  }
}

class FurnitureManager {
  constructor() {
    this.furniture = [];
    this.popup = null;
  }

  updateFurniture(startX, startY, furnitureImage, infoImage, hitboxOffsetX, hitboxOffsetY, hitboxW, hitboxH) {
    let f = new Furniture(startX, startY, furnitureImage, infoImage, hitboxOffsetX, hitboxOffsetY, hitboxW, hitboxH);
    this.furniture.push(f);
  }

  display() {
    for (let f of this.furniture) {
      f.display();
    }
  }
  checkInfoClicked(x, y) {
    for (let f of this.furniture) {
      if (
        x > f.x + f.hitboxOffsetX - f.hitboxW / 2 &&
        x < f.x + f.hitboxOffsetX + f.hitboxW / 2 &&
        y > f.y + f.hitboxOffsetY - f.hitboxH / 2 &&
        y < f.y + f.hitboxOffsetY + f.hitboxH / 2
      ) {
        this.popup = new Popup(f.infoImage);
        return;
      }
    }
  }
}

class Popup {
  constructor(image) {
    this.image = image;
  }

  display() {
    push();
    translate(width / 2, height / 2);
    noStroke();
    rectMode(CENTER);
    fill(255, 100);
    rect(0, 0, width, height);

    imageMode(CENTER);
    image(this.image, 0, 0, 300, 360);
    pop();
  }

  checkClick(x, y) {
    if (
      x < width / 2 - 150 ||
      x > width / 2 + 150 ||
      y < height / 2 - 180 ||
      y > height / 2 + 180 / 2
    ) {
      furnitureManager.popup = null;
    }
  }
}
